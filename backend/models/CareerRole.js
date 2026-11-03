import mongoose from 'mongoose';

const requiredSkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    importance: {
      type: String,
      enum: ['Critical', 'Core', 'GoodToHave'],
      default: 'Core',
    },
    minProficiency: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Intermediate',
    },
    weight: {
      type: Number,
      default: 1.0, // Multiplier for scoring
    },
  },
  { _id: false }
);

const roadmapTaskSchema = new mongoose.Schema(
  {
    taskId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillName: { type: String, required: true },
    estimatedHours: { type: Number, default: 10 },
    resources: [
      {
        title: { type: String },
        url: { type: String },
        type: { type: String, enum: ['Article', 'Video', 'Documentation', 'Project', 'Course'], default: 'Documentation' }
      }
    ]
  },
  { _id: false }
);

const roadmapStageSchema = new mongoose.Schema(
  {
    stageNumber: { type: Number, required: true },
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    durationWeeks: { type: Number, default: 4 },
    tasks: [roadmapTaskSchema],
  },
  { _id: false }
);

const careerRoleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    domain: {
      type: String,
      required: true,
      enum: [
        'Web Development',
        'Artificial Intelligence',
        'Data Science & Analytics',
        'Cloud & DevOps',
        'Cybersecurity',
        'Mobile App Development',
        'Software Engineering',
        'System Architecture'
      ],
    },
    shortDescription: {
      type: String,
      required: true,
    },
    detailedDescription: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      default: 'Code',
    },
    gradient: {
      type: String,
      default: 'from-blue-600 to-indigo-600',
    },
    avgSalary: {
      freshers: { type: String, default: '₹6 - 12 LPA / $70k - 95k' },
      midLevel: { type: String, default: '₹14 - 28 LPA / $110k - 145k' },
      senior: { type: String, default: '₹30 - 60+ LPA / $160k - 220k+' },
    },
    marketDemand: {
      type: String,
      enum: ['Extremely High', 'Very High', 'High', 'Moderate'],
      default: 'Very High',
    },
    growthRate: {
      type: String,
      default: '+22% (2024-2030)',
    },
    difficultyLevel: {
      type: String,
      enum: ['Beginner Friendly', 'Intermediate', 'Advanced', 'Hard'],
      default: 'Intermediate',
    },
    keyResponsibilities: [
      {
        type: String,
      },
    ],
    matchedJobTitles: [
      {
        type: String,
      },
    ],
    topInterviewTopics: [
      {
        type: String,
      },
    ],
    requiredSkills: [requiredSkillSchema],
    standardRoadmapStages: [roadmapStageSchema],
  },
  {
    timestamps: true,
  }
);

const CareerRole = mongoose.model('CareerRole', careerRoleSchema);
export default CareerRole;
