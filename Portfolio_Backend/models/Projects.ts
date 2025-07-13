import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  description: { type: String },
  webUrl: { type: String, default:'#' },
  imgUrl : {type : String , default:'#'},
  gitHubUrl : {type : String , default:'#'},
  tool : {type : [String]},
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'Projects'
});

const Project = model('Portfolio', projectSchema);
export default Project;
