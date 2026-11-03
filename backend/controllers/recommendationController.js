import CareerRole from '../models/CareerRole.js';
import Profile from '../models/Profile.js';
import { generateCareerRecommendations, calculateRoleMatch } from '../engine/recommendationEngine.js';

/**
 * @desc    Get top ranked career recommendations for the current student
 * @route   GET /api/recommendations
 * @access  Private
 */
export const getRecommendations = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found. Please complete your profile and skills setup first.',
      });
    }

    const allRoles = await CareerRole.find({});
    if (!allRoles || allRoles.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No career roles found in the database. Please seed the database.',
      });
    }

    const recommendations = generateCareerRecommendations(allRoles, profile);

    res.status(200).json({
      success: true,
      totalRolesAnalyzed: allRoles.length,
      topMatch: recommendations[0] || null,
      recommendations,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single career role detail with personalized skill gap analysis
 * @route   GET /api/recommendations/role/:slug
 * @access  Private (or optional auth)
 */
export const getRoleDetailWithGap = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const careerRole = await CareerRole.findOne({ slug });

    if (!careerRole) {
      return res.status(404).json({
        success: false,
        message: 'Career role not found.',
      });
    }

    let matchAnalysis = null;
    if (req.user) {
      const profile = await Profile.findOne({ user: req.user._id });
      if (profile) {
        matchAnalysis = calculateRoleMatch(careerRole, profile);
      }
    }

    res.status(200).json({
      success: true,
      data: careerRole,
      matchAnalysis,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all available career roles (catalog view)
 * @route   GET /api/recommendations/roles
 * @access  Public
 */
export const getAllRoles = async (req, res, next) => {
  try {
    const roles = await CareerRole.find({}).select(
      'title slug domain shortDescription iconName gradient avgSalary marketDemand growthRate difficultyLevel requiredSkills'
    );

    res.status(200).json({
      success: true,
      count: roles.length,
      data: roles,
    });
  } catch (error) {
    next(error);
  }
};
