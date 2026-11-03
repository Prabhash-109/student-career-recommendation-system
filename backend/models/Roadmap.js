import mongoose from 'mongoose';

const generatedTaskSchema = new mongoose.Schema(
  {
    taskId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillName: { type: String, required: true },
    isAlreadyKnown: { type: Boolean, default: false }, // Marked true if student already had proficiency
    isCompleted: { type: Boolean, default: false },
    completedAt: { type: Date, default: null },
    estimatedHours: { type: Number, default: 8 },
    resources: [
      {
        title: { type: String },
        url: { type: String },
        type: { type: String, default: 'YouTube' },
        creator: { type: String, default: '' },
        badge: { type: String, default: '' }
      }
    ]
  },
  { _id: false }
);

const generatedStageSchema = new mongoose.Schema(
  {
    stageNumber: { type: Number, required: true },
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    durationWeeks: { type: Number, default: 4 },
    isCompleted: { type: Boolean, default: false },
    tasks: [generatedTaskSchema],
  },
  { _id: false }
);

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    careerRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CareerRole',
      required: true,
    },
    careerTitle: {
      type: String,
      required: true,
    },
    timelineDuration: {
      type: String,
      enum: ['3 Months (Fast-Track)', '6 Months (Standard)', '12 Months (Comprehensive)'],
      default: '6 Months (Standard)',
    },
    targetWeeklyHours: {
      type: Number,
      default: 15,
    },
    stages: [generatedStageSchema],
    totalTasks: {
      type: Number,
      default: 0,
    },
    completedTasksCount: {
      type: Number,
      default: 0,
    },
    completionPercentage: {
      type: Number,
      default: 0,
    },
    nextRecommendedSkill: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['Active', 'Completed', 'Paused', 'Archived'],
      default: 'Active',
    },
    lastActivityDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Roadmap = mongoose.model('Roadmap', roadmapSchema);
export default Roadmap;
