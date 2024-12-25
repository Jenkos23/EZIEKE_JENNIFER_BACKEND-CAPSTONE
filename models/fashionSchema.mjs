import mongoose from 'mongoose';

// Highlight Sub-Schema
const highlightSchema = new mongoose.Schema({
    designer: { type: String, required: true },
    collection: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

// Content Sub-Schema
const contentSchema = new mongoose.Schema({
    introduction: { type: String, required: true },
    highlights: [highlightSchema], // Array of highlights using highlightSchema
    industry_impact: { type: String, required: true },
    conclusion: { type: String, required: true }
});

// Main Fashion Schema
const fashionSchema = new mongoose.Schema({
    headline: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    content: contentSchema, // Using the contentSchema
    tags: [{ type: String }], // Array of tags
});

// Create a Mongoose model based on the schema
const Fashion = mongoose.model('Fashion', fashionSchema);

export default Fashion;