import mongoose from 'mongoose';

const singleAnswerSchema = new mongoose.Schema(
  {
    questionNumber: { type: Number, required: true },
    questionText: { type: String, default: '' },
    selectedOptionId: { type: String, required: true },
    selectedOptionText: { type: String, default: '' },
  },
  { _id: false }
);

const assessmentResponseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quizMode: {
      type: String,
      enum: ['quick', 'full'],
      default: 'quick',
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    answers: [singleAnswerSchema],
    domainScores: {
      webDevelopment: { type: Number, default: 0 },
      artificialIntelligence: { type: Number, default: 0 },
      dataScience: { type: Number, default: 0 },
      cloudDevOps: { type: Number, default: 0 },
      cybersecurity: { type: Number, default: 0 },
      mobileDevelopment: { type: Number, default: 0 },
      systemDesign: { type: Number, default: 0 },
    },
    domainPercentages: {
      webDevelopment: { type: Number, default: 0 },
      artificialIntelligence: { type: Number, default: 0 },
      dataScience: { type: Number, default: 0 },
      cloudDevOps: { type: Number, default: 0 },
      cybersecurity: { type: Number, default: 0 },
      mobileDevelopment: { type: Number, default: 0 },
      systemDesign: { type: Number, default: 0 },
    },
    aiDiagnosticReport: {
      archetypeTitle: { type: String, default: '' },
      archetypeSubtitle: { type: String, default: '' },
      workStyleTag: { type: String, default: '' },
      summary: { type: String, default: '' },
      keySuperpowers: [{ type: String }],
      idealWorkingStyle: { type: String, default: '' },
      recommendedCareerFocus: [{ type: String }],
      growthTips: [{ type: String }],
    },
  },
  {
    timestamps: true,
  }
);

const AssessmentResponse = mongoose.model('AssessmentResponse', assessmentResponseSchema);
export default AssessmentResponse;
