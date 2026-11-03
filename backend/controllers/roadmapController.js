import Roadmap from '../models/Roadmap.js';
import CareerRole from '../models/CareerRole.js';
import Profile from '../models/Profile.js';
import { generatePersonalizedRoadmap } from '../engine/roadmapGenerator.js';

/**
 * @desc    Generate a new personalized roadmap or fetch active one for a role
 * @route   POST /api/roadmap/generate
 * @access  Private
 */
export const generateOrGetRoadmap = async (req, res, next) => {
  try {
    const { careerRoleId, duration } = req.body;

    if (!careerRoleId) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid careerRoleId.',
      });
    }

    const careerRole = await CareerRole.findById(careerRoleId);
    if (!careerRole) {
      return res.status(404).json({
        success: false,
        message: 'Career role not found.',
      });
    }

    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Student profile not found. Please complete profile setup.',
      });
    }

    const timelineDuration = duration || profile.timelineGoal || '6 Months (Standard)';

    // Check if an active roadmap for this career role already exists
    let roadmap = await Roadmap.findOne({
      user: req.user._id,
      careerRole: careerRole._id,
      status: 'Active',
    });

    // If no existing roadmap or new duration explicitly requested, generate fresh
    if (!roadmap || (duration && roadmap.timelineDuration !== duration)) {
      const generatedData = generatePersonalizedRoadmap(careerRole, profile, timelineDuration);

      if (roadmap) {
        // Update existing roadmap
        roadmap.stages = generatedData.stages;
        roadmap.timelineDuration = timelineDuration;
        roadmap.totalTasks = generatedData.totalTasks;
        roadmap.completedTasksCount = generatedData.completedTasksCount;
        roadmap.completionPercentage = generatedData.completionPercentage;
        roadmap.nextRecommendedSkill = generatedData.nextRecommendedSkill;
        await roadmap.save();
      } else {
        roadmap = await Roadmap.create({
          user: req.user._id,
          ...generatedData,
        });
      }
    }

    // Also update student's target career role in profile
    profile.targetCareerRole = careerRole.title;
    await profile.save();

    res.status(200).json({
      success: true,
      message: 'Personalized roadmap generated successfully!',
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get current active student roadmap for dashboard
 * @route   GET /api/roadmap/active
 * @access  Private
 */
export const getActiveRoadmap = async (req, res, next) => {
  try {
    let roadmap = await Roadmap.findOne({
      user: req.user._id,
      status: 'Active',
    }).populate('careerRole');

    // If no active roadmap, try to auto-generate one for their target career role or top match
    if (!roadmap) {
      const profile = await Profile.findOne({ user: req.user._id });
      let careerRole = null;

      if (profile && profile.targetCareerRole) {
        careerRole = await CareerRole.findOne({ title: profile.targetCareerRole });
      }

      if (!careerRole) {
        careerRole = await CareerRole.findOne({});
      }

      if (careerRole && profile) {
        const generatedData = generatePersonalizedRoadmap(careerRole, profile, profile.timelineGoal || '6 Months (Standard)');
        roadmap = await Roadmap.create({
          user: req.user._id,
          ...generatedData,
        });
      }
    }

    res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Toggle roadmap milestone task completed/uncompleted
 * @route   PUT /api/roadmap/task/:taskId/toggle
 * @access  Private
 */
export const toggleTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { roadmapId } = req.body;

    let query = { user: req.user._id, status: 'Active' };
    if (roadmapId) {
      query._id = roadmapId;
    }

    const roadmap = await Roadmap.findOne(query);
    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: 'Active roadmap not found.',
      });
    }

    let taskFound = false;
    let nextSkill = '';

    // Loop through stages and find the task
    roadmap.stages.forEach((stage) => {
      stage.tasks.forEach((task) => {
        if (task.taskId === taskId) {
          taskFound = true;
          task.isCompleted = !task.isCompleted;
          task.completedAt = task.isCompleted ? new Date() : null;
        }
      });
      stage.isCompleted = stage.tasks.length > 0 && stage.tasks.every((t) => t.isCompleted);
    });

    if (!taskFound) {
      return res.status(404).json({
        success: false,
        message: 'Task with specified ID was not found in this roadmap.',
      });
    }

    // Recalculate totals and next actionable skill
    let completedCount = 0;
    let total = 0;

    roadmap.stages.forEach((stage) => {
      stage.tasks.forEach((task) => {
        total++;
        if (task.isCompleted) {
          completedCount++;
        } else if (!nextSkill) {
          nextSkill = task.skillName;
        }
      });
    });

    roadmap.totalTasks = total;
    roadmap.completedTasksCount = completedCount;
    roadmap.completionPercentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    roadmap.nextRecommendedSkill = nextSkill || 'All core milestones completed! Build capstone projects.';
    roadmap.lastActivityDate = new Date();

    if (roadmap.completionPercentage === 100) {
      roadmap.status = 'Completed';
    }

    await roadmap.save();

    res.status(200).json({
      success: true,
      message: 'Task status updated successfully!',
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get dynamic YouTube & Docs learning resources for a specific skill
 * @route   GET /api/roadmap/resources?skill=React
 * @access  Public
 */
export const getDynamicSkillResources = async (req, res, next) => {
  try {
    const { skill } = req.query;
    if (!skill) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a skill query parameter.',
      });
    }

    const { fetchSkillResources } = await import('../services/youtubeService.js');
    const resources = await fetchSkillResources(skill);

    res.status(200).json({
      success: true,
      skill,
      count: resources.length,
      data: resources,
    });
  } catch (error) {
    next(error);
  }
};
