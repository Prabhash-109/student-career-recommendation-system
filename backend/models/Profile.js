import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        'Programming Languages',
        'Frontend',
        'Backend',
        'Databases',
        'Cloud & DevOps',
        'AI & Machine Learning',
        'Data & Analytics',
        'Cybersecurity',
        'Mobile Development',
        'Core Computer Science',
        'Tools & Others',
      ],
      default: 'Tools & Others',
    },
    proficiency: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      default: 'Beginner',
    },
    experienceMonths: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    // Academic Details
    college: {
      type: String,
      trim: true,
      default: '',
    },
    branch: {
      type: String,
      trim: true,
      default: 'Computer Science & Engineering',
    },
    academicYear: {
      type: String,
      enum: ['1st Year', '2nd Year', '3rd Year', 'Final Year', 'Graduated', 'Self-Taught'],
      default: '3rd Year',
    },
    semester: {
      type: Number,
      min: 1,
      max: 8,
      default: 5,
    },
    cgpa: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
    // Interests & Target Domains
    preferredDomains: [
      {
        type: String,
        trim: true,
      },
    ],
    targetCareerRole: {
      type: String,
      trim: true,
      default: '',
    },
    // Timeline & Commitment
    timelineGoal: {
      type: String,
      enum: ['3 Months (Fast-Track)', '6 Months (Standard)', '12 Months (Comprehensive)'],
      default: '6 Months (Standard)',
    },
    weeklyHours: {
      type: Number,
      min: 2,
      max: 60,
      default: 15,
    },
    // Skills Matrix
    skills: [skillItemSchema],
    // Assessment Interest Vector (populated by quiz)
    domainInterestScores: {
      webDevelopment: { type: Number, default: 0 },
      artificialIntelligence: { type: Number, default: 0 },
      dataScience: { type: Number, default: 0 },
      cloudDevOps: { type: Number, default: 0 },
      cybersecurity: { type: Number, default: 0 },
      mobileDevelopment: { type: Number, default: 0 },
      systemDesign: { type: Number, default: 0 },
    },
    // Bio and social links
    bio: {
      type: String,
      maxlength: 500,
      default: '',
    },
    githubUrl: {
      type: String,
      trim: true,
      default: '',
    },
    linkedinUrl: {
      type: String,
      trim: true,
      default: '',
    },
    portfolioUrl: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
