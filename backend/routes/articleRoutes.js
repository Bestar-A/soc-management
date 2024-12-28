import express from 'express'
import { 
    registerArticle,
    getAllArticles,
    getArticleById,
    updateArticleById,
    deleteArticle,
 } from '../controller/articleController.js'
 import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerArticle).get(getAllArticles);
router.route('/:id').get(getArticleById).put(protect, admin, updateArticleById).delete(protect, admin, deleteArticle);

export default router;