import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { skillsTaxonomy } from '../data/skillsTaxonomy.js';

/**
 * @desc    Get current user profile
 * @route   GET /api/profile
 * @access  Private
 */
export const getProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      profile = await Profile.create({ user: req.user._id, skills: [] });
    }
    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update or complete onboarding profile
 * @route   PUT /api/profile
 * @access  Private
 */
export const updateProfile = async (req, res, next) => {
  try {
    const {
      college,
      branch,
      academicYear,
      semester,
      cgpa,
      preferredDomains,
      targetCareerRole,
      timelineGoal,
      weeklyHours,
      skills,
      bio,
      githubUrl,
      linkedinUrl,
      portfolioUrl,
    } = req.body;

    let profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      profile = new Profile({ user: req.user._id });
    }

    if (college !== undefined) profile.college = college;
    if (branch !== undefined) profile.branch = branch;
    if (academicYear !== undefined) profile.academicYear = academicYear;
    if (semester !== undefined) profile.semester = semester;
    if (cgpa !== undefined) profile.cgpa = cgpa;
    if (preferredDomains !== undefined) profile.preferredDomains = preferredDomains;
    if (targetCareerRole !== undefined) profile.targetCareerRole = targetCareerRole;
    if (timelineGoal !== undefined) profile.timelineGoal = timelineGoal;
    if (weeklyHours !== undefined) profile.weeklyHours = weeklyHours;
    if (skills !== undefined) profile.skills = skills;
    if (bio !== undefined) profile.bio = bio;
    if (githubUrl !== undefined) profile.githubUrl = githubUrl;
    if (linkedinUrl !== undefined) profile.linkedinUrl = linkedinUrl;
    if (portfolioUrl !== undefined) profile.portfolioUrl = portfolioUrl;

    await profile.save();

    // Mark user onboarding as completed if they have provided core academic info and skills
    if (profile.branch && profile.skills && profile.skills.length > 0) {
      await User.findByIdAndUpdate(req.user._id, { isOnboardingCompleted: true });
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully!',
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get pre-categorized skills taxonomy catalog for frontend pickers
 * @route   GET /api/profile/skills-catalog
 * @access  Public
 */
export const getSkillsCatalog = async (req, res, next) => {
  try {
    // Group skills by category
    const categorized = {};
    skillsTaxonomy.forEach((skill) => {
      if (!categorized[skill.category]) {
        categorized[skill.category] = [];
      }
      categorized[skill.category].push(skill);
    });

    res.status(200).json({
      success: true,
      totalSkills: skillsTaxonomy.length,
      categories: Object.keys(categorized),
      categorizedSkills: categorized,
      allSkills: skillsTaxonomy,
    });
  } catch (error) {
    next(error);
  }
};
