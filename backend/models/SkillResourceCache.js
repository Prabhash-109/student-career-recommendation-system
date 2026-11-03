import mongoose from 'mongoose';

const resourceItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, default: 'YouTube' },
    creator: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    views: { type: String, default: '' },
    duration: { type: String, default: '' },
    badge: { type: String, default: '' },
  },
  { _id: false }
);

const skillResourceCacheSchema = new mongoose.Schema(
  {
    skillKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    skillName: {
      type: String,
      required: true,
    },
    resources: [resourceItemSchema],
    lastFetchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const SkillResourceCache = mongoose.model('SkillResourceCache', skillResourceCacheSchema);
export default SkillResourceCache;
