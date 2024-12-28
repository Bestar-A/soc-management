import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },  
  order: {
    type: Number,
    default: 0,
  },
  isHome: {
    type: Boolean,
    default: false,
  },
},{
    timestamps: true
});

const Article = mongoose.model("Article", articleSchema);

export default Article;