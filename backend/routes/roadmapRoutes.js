import express from 'express';
import {
  generateOrGetRoadmap,
  getActiveRoadmap,
  toggleTask,
  getDynamicSkillResources,
} from '../controllers/roadmapController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', protect, generateOrGetRoadmap);
router.get('/active', protect, getActiveRoadmap);
router.get('/resources', getDynamicSkillResources);
router.put('/task/:taskId/toggle', protect, toggleTask);

export default router;
