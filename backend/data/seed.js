import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CareerRole from '../models/CareerRole.js';
import AssessmentQuestion from '../models/AssessmentQuestion.js';
import { careerRolesData } from './careerRolesData.js';
import { questionsData } from './questionsData.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/student_career_advisor';
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB for database seeding...');

    // Clear existing career roles and assessment questions
    await CareerRole.deleteMany({});
    await AssessmentQuestion.deleteMany({});
    console.log('🧹 Cleared existing Career Roles and Assessment Questions.');

    // Insert Career Roles
    const insertedRoles = await CareerRole.insertMany(careerRolesData);
    console.log(`✨ Successfully seeded ${insertedRoles.length} Career Roles!`);

    // Insert Assessment Questions
    const insertedQuestions = await AssessmentQuestion.insertMany(questionsData);
    console.log(`✨ Successfully seeded ${insertedQuestions.length} Assessment Questions!`);

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during database seeding:', error);
    process.exit(1);
  }
};

seedDatabase();
