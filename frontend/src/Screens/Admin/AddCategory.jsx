import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useRegisterCategoryMutation,
} from "../../store/slices/categorySlice";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [addCategories, setAddCategories] = useState([]);
  const [registerCategory] = useRegisterCategoryMutation();
  const {
    data: categories,
    refetch,
    isLoading,
    error,
  } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const btn_colors = [
    "btn-outline-primary",
    "btn-outline-secondary",
    "btn-outline-success",
    "btn-outline-info",
    "btn-outline-dark",
    "btn-outline-danger",
  ];
  useEffect(() => {
    if (!isLoading) {
      setAddCategories(categories);
    }
  }, [categories]);
  const addCategoryHandle = async (e) => {
    e.preventDefault();
    if (!category) {
      toast.error("Enter a category.");
      return;
    }
    try {
      const res = await registerCategory({ category }).unwrap();
      refetch();
      console.log(res);
      if (res) toast.success("The Category has been added successfully.");
    } catch (err) {
        toast.error(err?.data?.message || err.error);
    }
  };

  const deleteCategoryHandle = async (id) => {
      try {
         const {data} = await deleteCategory({id});
          refetch();
          if(data){
            toast.success(data.message)
          }                    
      } catch (err) {
          toast.error(err?.data?.message || err.error);
      }
  }
  return (
    <main id="admin-main" className="admin-main">
      <div className="pagetitle">
        <h1>Add Category</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Add category</li>
          </ol>
        </nav>
      </div>

      <section className="section" style={{ padding: "0" }}>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                You can add or delete categories you want.
              </h5>
              <div>
                {!isLoading &&
                  addCategories.map((addCats) => (
                    
                    <button
                      type="button"
                      className={`btn d-inline flex-fill mx-2 mb-3 ${btn_colors[randNum(0, 5)]} shadow-lg `}
                      key={addCats._id}
                      onClick={() => deleteCategoryHandle(addCats._id)}
                    >
                      {addCats.category}
                    </button>
                   
                  ))}
              </div>
              <form className="row g-3 mt-5 needs-validation">
                <div className="col-md-8 position-relative">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Category"
                    />
                    <label>Category</label>
                  </div>
                </div>
                <div className="col-md-4 position-relative">
                  <button
                    className="btn btn-primary w-100"
                    onClick={addCategoryHandle}
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddCategory;
