import mongoose from 'mongoose';

const questionOptionSchema = new mongoose.Schema(
  {
    optionId: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: String, default: 'Compass' },
    // Domain score weight impact (0 - 10)
    domainWeights: {
      webDevelopment: { type: Number, default: 0 },
      artificialIntelligence: { type: Number, default: 0 },
      dataScience: { type: Number, default: 0 },
      cloudDevOps: { type: Number, default: 0 },
      cybersecurity: { type: Number, default: 0 },
      mobileDevelopment: { type: Number, default: 0 },
      systemDesign: { type: Number, default: 0 },
    },
  },
  { _id: false }
);

const assessmentQuestionSchema = new mongoose.Schema(
  {
    questionNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ['Work Style & Preference', 'Problem Solving', 'Technical Interest', 'Project Vision', 'Daily Activity'],
      default: 'Technical Interest',
    },
    questionText: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    isQuickQuiz: {
      type: Boolean,
      default: true, // If true, included in 5-question quick quiz
    },
    options: [questionOptionSchema],
  },
  {
    timestamps: true,
  }
);

const AssessmentQuestion = mongoose.model('AssessmentQuestion', assessmentQuestionSchema);
export default AssessmentQuestion;
