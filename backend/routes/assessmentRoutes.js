import express from 'express';
import {
  getAssessmentQuestions,
  getLatestAssessment,
  submitAssessment,
} from '../controllers/assessmentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/questions', getAssessmentQuestions);
router.get('/latest', protect, getLatestAssessment);
router.post('/submit', protect, submitAssessment);

export default router;
