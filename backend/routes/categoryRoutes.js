import express from "express";
import {
  registerCategory,
  deleteCategory,
  getAllCategories,
} from "../controller/categoryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, admin, registerCategory)
  .get(getAllCategories)
  .delete(protect, admin, deleteCategory);


export default router;
