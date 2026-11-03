import express from 'express';
import {
  getProfile,
  updateProfile,
  getSkillsCatalog,
} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/skills-catalog', getSkillsCatalog);
router.route('/').get(protect, getProfile).put(protect, updateProfile);

export default router;
