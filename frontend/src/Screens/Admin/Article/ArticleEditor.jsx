import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useImageUploadMutation,
  useRegisterArticleMutation,
} from "../../../store/slices/articleSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Editor } from "primereact/editor";
import { useGetAllCategoriesQuery } from "../../../store/slices/categorySlice";

const ArticleEditor = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  // const [img, setImg] = useState();
  const [file, setFile] = useState({ preview: "", data: "" });

  const { userInfo } = useSelector((state) => state.auth);
  const [registerArticle] = useRegisterArticleMutation();
  const [imageUpload] = useImageUploadMutation();

  console.log(content)
  const {
    data: categories,
    refetch: categoryRefetch,
    isLoading: categoryLoading,
  } = useGetAllCategoriesQuery();

  const handleFileChange = (e) => {
    const image = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(image);
  };
  useEffect(() => {
    if (!categoryLoading) {
      categoryRefetch();
    }
  }, [categoryRefetch, categoryLoading]);
  // console.log(category)
  // console.log(file.data);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file.data);
    if(!title || !category || !content) {
      toast.error("Invalid Input field")
      return;
    }

    try {
      const uploadRes = await imageUpload(formData).unwrap();
      // setImg(uploadRes.image);
      // console.log("imagepath", img)
      await registerArticle({
        userName: userInfo.name,
        title,
        category,
        content,
        image: uploadRes.image,
      }).unwrap();
      toast.success("Article posted successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <main id="admin-main" className="admin-main">
      <div className="pagetitle">
        <h1>Article Editor</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Article</li>
            <li className="breadcrumb-item active">Editor</li>
          </ol>
        </nav>
      </div>

      <section className="section" style={{ padding: "0" }}>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                You can write the wonderful article
              </h5>
              <form className="row g-3 needs-validation">
                <div className="col-md-8 position-relative">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                    />
                    <label>Title</label>
                  </div>
                </div>
                <div className="col-md-4 position-relative">
                  <div className="form-floating mb-3">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      aria-label="Category"
                    >
                      {!categoryLoading &&
                        categories.map((category) => (
                          <option key={category._id}>
                            {category.category}
                          </option>
                        ))}
                    </select>
                    <label>Category</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">                    
                    <Editor
                      style={{ height: "200px" }}
                      value={content}
                      onTextChange={(e) => setContent(e.htmlValue)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100"
                    onClick={submitHandler}
                  >
                    Submit
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

export default ArticleEditor;
