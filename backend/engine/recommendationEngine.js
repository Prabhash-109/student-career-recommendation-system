/**
 * Smart Career Recommendation Engine
 * Calculates weighted compatibility scores between a Student Profile and Industry Career Roles.
 */

const PROFICIENCY_WEIGHTS = {
  Beginner: 0.6,
  Intermediate: 1.0,
  Advanced: 1.25,
};

const DOMAIN_KEY_MAP = {
  'Web Development': 'webDevelopment',
  'Artificial Intelligence': 'artificialIntelligence',
  'Data Science & Analytics': 'dataScience',
  'Cloud & DevOps': 'cloudDevOps',
  'Cybersecurity': 'cybersecurity',
  'Mobile App Development': 'mobileDevelopment',
  'Software Engineering': 'systemDesign',
  'System Architecture': 'systemDesign',
};

/**
 * Calculate match score for a single career role against student profile
 */
export const calculateRoleMatch = (careerRole, studentProfile) => {
  const studentSkillsMap = new Map();
  (studentProfile.skills || []).forEach((s) => {
    studentSkillsMap.set(s.name.toLowerCase().trim(), s.proficiency || 'Beginner');
  });

  const requiredSkills = careerRole.requiredSkills || [];
  let totalMaxSkillWeight = 0;
  let earnedSkillWeight = 0;
  const matchedSkills = [];
  const missingSkills = [];

  requiredSkills.forEach((req) => {
    const skillNameLower = req.name.toLowerCase().trim();
    const importanceMultiplier = req.importance === 'Critical' ? 1.4 : req.importance === 'Core' ? 1.0 : 0.7;
    const baseWeight = (req.weight || 1.0) * importanceMultiplier;
    totalMaxSkillWeight += baseWeight * 1.0; // Ideal Intermediate level

    if (studentSkillsMap.has(skillNameLower)) {
      const studentProficiency = studentSkillsMap.get(skillNameLower);
      const levelMultiplier = PROFICIENCY_WEIGHTS[studentProficiency] || 0.6;
      earnedSkillWeight += baseWeight * levelMultiplier;
      matchedSkills.push({
        name: req.name,
        category: req.category,
        importance: req.importance,
        studentProficiency,
        requiredMin: req.minProficiency,
      });
    } else {
      missingSkills.push({
        name: req.name,
        category: req.category,
        importance: req.importance,
        requiredMin: req.minProficiency,
      });
    }
  });

  // Calculate Normalized Skill Score (0 to 100)
  const skillMatchScore = totalMaxSkillWeight > 0 
    ? Math.min(100, Math.round((earnedSkillWeight / totalMaxSkillWeight) * 100))
    : 0;

  // Calculate Interest Score from Quiz and Preferred Domains
  const domainKey = DOMAIN_KEY_MAP[careerRole.domain] || 'webDevelopment';
  const rawInterestScore = studentProfile.domainInterestScores?.[domainKey] || 0;
  
  // Normalize interest score (assume quiz max raw score in domain is ~25)
  let normalizedInterestScore = Math.min(100, Math.round((rawInterestScore / 25) * 100));

  // Preferred Domain Bonus (+15% if explicitly selected)
  if (
    studentProfile.preferredDomains &&
    studentProfile.preferredDomains.some((d) => d.toLowerCase().includes(careerRole.domain.toLowerCase()) || careerRole.domain.toLowerCase().includes(d.toLowerCase()))
  ) {
    normalizedInterestScore = Math.min(100, normalizedInterestScore + 15);
  }

  // If no quiz taken yet and no preferred domains, interest score is 0
  if (rawInterestScore === 0 && (!studentProfile.preferredDomains || studentProfile.preferredDomains.length === 0)) {
    normalizedInterestScore = skillMatchScore > 0 ? skillMatchScore : 0;
  }

  // Composite Weighted Match Score: 70% Skill Matrix + 30% Domain Interest
  const totalMatchScore = Math.round((skillMatchScore * 0.70) + (normalizedInterestScore * 0.30));

  // Generate transparent human-readable explanation
  let matchReason = '';
  if (matchedSkills.length > 0) {
    const topMatched = matchedSkills.slice(0, 3).map((s) => s.name).join(', ');
    matchReason = `Your strong foundation in ${topMatched} aligns seamlessly with the core requirements of ${careerRole.title}.`;
  } else if (normalizedInterestScore > 0) {
    matchReason = `High interest affinity with ${careerRole.domain}. Add your foundational skills to boost your match score.`;
  } else {
    matchReason = `No skills added yet. Complete your profile skills or take the quiz assessment to calculate your match score.`;
  }

  return {
    careerRole,
    matchScore: Math.min(99, Math.max(0, totalMatchScore)),
    skillMatchScore,
    interestMatchScore: normalizedInterestScore,
    matchedSkillsCount: matchedSkills.length,
    totalRequiredSkillsCount: requiredSkills.length,
    matchedSkills,
    missingSkills,
    matchReason,
  };
};

/**
 * Rank all career roles for a student profile
 */
export const generateCareerRecommendations = (allCareerRoles, studentProfile) => {
  const recommendations = allCareerRoles.map((role) =>
    calculateRoleMatch(role, studentProfile)
  );

  // Sort descending by match score
  recommendations.sort((a, b) => b.matchScore - a.matchScore);

  return recommendations;
};
