import express from 'express';
import {
  getRecommendations,
  getRoleDetailWithGap,
  getAllRoles,
} from '../controllers/recommendationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/roles', getAllRoles);
router.get('/', protect, getRecommendations);
router.get('/role/:slug', protect, getRoleDetailWithGap);

export default router;
