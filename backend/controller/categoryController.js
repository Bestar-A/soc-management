import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";

// @des Post a category
// @route POST /api/category
// @access admin

const registerCategory = asyncHandler( async (req, res) => {
    const {
        category
    } = req.body;
    const existCategory = await Category.findOne({category});
 
    if(existCategory) {
        res.status(400);
        throw new Error("Same Category Already Exists");
    }
    
    const addCategory = await Category.create({
        category
    });
    if(addCategory){
        res.json({
            category: addCategory.category,
        });
    }else{
        res.status(400);
        throw new Error("Invalid Category Data");
    }
});
// @des GET categories
// @route GET /api/category
// @access private

const getAllCategories = asyncHandler (async(req, res) => {
    const categories = await Category.find({});
    res.json(categories);
})

  // @desc    Delete a category
  // @route   DELETE /api/category
  // @access  Private/Admin
  const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.body.id);
    if (category) {
      await Category.deleteOne({ _id: category._id });
      res.json({ message: 'Category has been removed successfully' });
    } else {
      res.status(404);
      throw new Error('Category not found');
    }
  });

export { 
    registerCategory,
    deleteCategory,
    getAllCategories,
 };
 