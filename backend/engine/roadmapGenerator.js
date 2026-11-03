import { getResourcesForSkill } from '../data/learningResources.js';

/**
 * Personalized Dynamic Roadmap Generator
 * Adapts career roadmap stages and tasks according to the student's existing skills and target duration.
 */

export const generatePersonalizedRoadmap = (careerRole, studentProfile, duration = '6 Months (Standard)') => {
  const studentSkillsMap = new Map();
  (studentProfile.skills || []).forEach((s) => {
    studentSkillsMap.set(s.name.toLowerCase().trim(), s.proficiency || 'Beginner');
  });

  const durationMultiplier = duration.includes('3 Months') ? 0.75 : duration.includes('12 Months') ? 1.5 : 1.0;

  let totalTasks = 0;
  let completedTasksCount = 0;
  let nextRecommendedSkill = '';

  const personalizedStages = (careerRole.standardRoadmapStages || []).map((stage) => {
    const adaptedTasks = (stage.tasks || []).map((task) => {
      const skillNameLower = (task.skillName || '').toLowerCase().trim();
      const hasSkill = studentSkillsMap.has(skillNameLower);
      const studentProficiency = hasSkill ? studentSkillsMap.get(skillNameLower) : null;

      // If student has Intermediate or Advanced, consider task already mastered!
      const isAlreadyKnown = hasSkill && (studentProficiency === 'Intermediate' || studentProficiency === 'Advanced');
      const isCompleted = isAlreadyKnown;

      totalTasks++;
      if (isCompleted) {
        completedTasksCount++;
      } else if (!nextRecommendedSkill) {
        nextRecommendedSkill = task.skillName;
      }

      // Fetch 3-4 curated Indian YouTube courses + official docs + practice
      const curatedResources = getResourcesForSkill(task.skillName || task.title);

      return {
        taskId: task.taskId,
        title: task.title,
        description: task.description,
        skillName: task.skillName,
        isAlreadyKnown,
        isCompleted,
        completedAt: isCompleted ? new Date() : null,
        estimatedHours: Math.round((task.estimatedHours || 10) * durationMultiplier),
        resources: curatedResources,
      };
    });

    const isStageCompleted = adaptedTasks.length > 0 && adaptedTasks.every((t) => t.isCompleted);

    return {
      stageNumber: stage.stageNumber,
      title: stage.title,
      focusArea: stage.focusArea,
      durationWeeks: Math.round((stage.durationWeeks || 4) * durationMultiplier),
      isCompleted: isStageCompleted,
      tasks: adaptedTasks,
    };
  });

  const completionPercentage = totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0;

  return {
    careerRole: careerRole._id,
    careerTitle: careerRole.title,
    timelineDuration: duration,
    targetWeeklyHours: studentProfile.weeklyHours || 15,
    stages: personalizedStages,
    totalTasks,
    completedTasksCount,
    completionPercentage,
    nextRecommendedSkill: nextRecommendedSkill || 'Advanced Production Capstone',
    status: 'Active',
  };
};
