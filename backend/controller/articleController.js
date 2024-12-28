import asyncHandler from '../middleware/asyncHandler.js'
import Article from '../models/articleModel.js'


// @des Post your article
// @route POST /api/article
// @access admin

const registerArticle = asyncHandler( async (req, res) => {
    const {
        userName,
        title,
        content,
        image,
        category,
        order,
        isHome,
    } = req.body;
   
    const existArticle = await Article.findOne({userName, title});
 
    if(existArticle) {
        res.status(400);
        throw new Error("Same Article Already Exists");
    }
    
    const article = await Article.create({
        userName,
        title,
        content,
        image,
        category,
        order,
        isHome,
    });
    if(article){
        res.json({
            userName: article.userName,
            title: article.title,
            content: article.content,
            image: article.image,
            category: article.category,
            order: article.order,
            isHome: article.isHome,
        });
    }else{
        res.status(400);
        throw new Error("Invalid article Data");
    }
});

// @des GET your article
// @route GET /api/article
// @access private

const getAllArticles = asyncHandler (async(req, res) => {
    const articles = await Article.find({});
    res.json(articles);
})

// @desc Fetch a Article
// @route api/article/:id
// @access Public

const getArticleById = asyncHandler( async(req, res) => {
    const article = await Article.findById(req.params.id);
    // console.log(article)
    if(article){
        return res.json(article);
    }else{
        res.status(404);
        throw new Error('Article Not Found');
    }
})

 // @desc    Update a article
// @route   PUT /api/article/:id
// @access  Private/Admin
const updateArticleById = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
    console.log(category, title)
    const article = await Article.findById(req.params.id);
    if (article) {
        article.title = title;
        article.category = category;
        article.content = content;
  
      const updatedArticle = await article.save();
      res.json(updatedArticle);
    } else {
      res.status(404);
      throw new Error('Article not found');
    }
  });
   // @desc    Delete a article
  // @route   DELETE /api/article/:id
  // @access  Private/Admin
  const deleteArticle = asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (article) {
      await Article.deleteOne({ _id: article._id });
      res.json({ message: 'Article removed' });
    } else {
      res.status(404);
      throw new Error('Article not found');
    }
  });

export { 
    getAllArticles,
    registerArticle,
    getArticleById,
    updateArticleById,
    deleteArticle,
 };