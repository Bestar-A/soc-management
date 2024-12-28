import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteArticleMutation,
  useGetAllArticlesQuery,
  useGetArticleByIdQuery,
  useUpdateArticleByIdMutation,
} from "../store/slices/articleSlice";
import "../assets/styles/floatbutton.css";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Editor } from "primereact/editor";
import { useGetAllCategoriesQuery } from "../store/slices/categorySlice";

const ViewArticle = () => {
  const { id: articleId } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);

  const {
    data: article,
    refetch,
    isLoading,
  } = useGetArticleByIdQuery(articleId);
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: articles,
    refetch: updateRefetch,
    isLoading: allLoading,
  } = useGetAllArticlesQuery();
  const [updateArticle, { isLoading: updateLoading }] =
    useUpdateArticleByIdMutation();
  const [deleteArticle] = useDeleteArticleMutation();

  const {
    data: categories,
    refetch: categoryRefetch,
    isLoading: categoryLoading,
  } = useGetAllCategoriesQuery();

  const deleteHandle = async (id) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this article?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArticle(id);
        updateRefetch();
        navigate("/Låtdiginspireras");
        Swal.fire({
          title: "Deleted!",
          text: "Your Article has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setCategory(article.category);
      setContent(article.content);
    }
    if (!categoryLoading) {
      categoryRefetch();
    }
  }, [article, categoryLoading, categoryRefetch]);

  const articleUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      await updateArticle({
        _id: articleId,
        title,
        category,
        content,
      });
      toast.success("Article updated");
      refetch();
      updateRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <nav className="float-button">
            <ul>
              <li>
                <Link to="/Låtdiginspireras">
                  <i className="fas fa-chevron-left"></i>
                  <b>Back</b>
                </Link>
              </li>
              {userInfo.isAdmin && (
                <>
                  <li>
                    <Link onClick={(e) => setShow(!show)}>
                      <i className="fas fa-edit"></i>
                      <b>Edit Article</b>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => deleteHandle(article._id)}>
                      <i className="fa fa-trash"></i>
                      <b>Delete Article</b>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <section className="single-article-content">
            <div className="container">
              <div className="row">
                <div className="col-md-9 article-content" data-aos="fade-up">
                  {/* ======= Single Article Content =======  */}
                  <div className="single-article">
                    <div className="article-meta">
                      <span className="date">{article.category}</span>{" "}
                      <span className="mx-1">•</span>{" "}
                      <span>{article.updatedAt.substring(0, 10)}</span>
                    </div>
                    <h1 className="mb-3">{article.title}</h1>

                    <figure className="my-4, text-center">
                      <img
                        src={article.image}
                        alt="Article"
                        className="img-fluid"
                        width="650"
                        height="380"
                      />
                    </figure>
                    <p>
                      <span
                        className="firstcharacter fa-beat"                        
                      ><div dangerouslySetInnerHTML={{
                        __html: article.content
                      }}></div></span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: article.content.substring(
                            1,
                            article.content.length
                          ),
                        }}
                      ></span>
                    </p>
                  </div>
                  {show && (
                    <div className="row justify-content-center mt-5">
                      <div className="col-lg-12">
                        <h5 className="comment-title">Update a Article</h5>
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <label>Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="Enter Title"
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <label>Category</label>
                            <select
                              className="form-select"
                              id="category"
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
                          </div>
                          <div className="col-12 mb-3">
                            <Editor
                              style={{ height: "200px" }}
                              value={content}
                              onTextChange={(e) => setContent(e.htmlValue)}
                            />
                          </div>
                          <div className="col-12">
                            <input
                              type="button"
                              className="btn btn-primary"
                              value="Article Update"
                              onClick={articleUpdateHandler}
                            />
                          </div>
                          {updateLoading && <Loader />}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-3">
                  {/* <!-- ======= Sidebar ======= --> */}
                  <div className="aside-block" data-aos="fade-up">
                    {/* <ul
                      className="nav nav-pills custom-tab-nav mb-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-popular-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-popular"
                          type="button"
                          role="tab"
                          aria-controls="pills-popular"
                          aria-selected="true"
                        >
                          Articles
                        </button>
                      </li>
                    </ul> */}

                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-popular"
                        role="tabpanel"
                        aria-labelledby="pills-popular-tab"
                      >
                        {!allLoading &&
                          articles.map((item) => (
                            <div
                              className="article-entry-1 border-bottom"
                              key={item._id}
                            >
                              <div className="article-meta">
                                <span className="date">{item.category}</span>{" "}
                                <span className="mx-1">•</span>{" "}
                                <span>{item.updatedAt.substring(0, 10)}</span>
                              </div>
                              <h2 className="mb-2">
                                <Link to={`/Låtdiginspireras/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h2>
                              {/* <span className="author mb-3 d-block">
                            </span> */}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="aside-block">
                    <h3 className="aside-title">Categories</h3>
                    <ul className="aside-links list-unstyled">
                      {!categoryLoading &&
                        categories.map((category) => (
                          <li key={category._id}>
                            <Link>
                              <i className="bi bi-chevron-right"></i>{" "}
                              {category.category}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* 
                <div className="aside-block">
                  <h3 className="aside-title">Tags</h3>
                  <ul className="aside-tags list-unstyled">
                    <li>
                      <a href="category.html">Business</a>
                    </li>
                    <li>
                      <a href="category.html">Culture</a>
                    </li>
                    <li>
                      <a href="category.html">Sport</a>
                    </li>
                    <li>
                      <a href="category.html">Food</a>
                    </li>
                    <li>
                      <a href="category.html">Politics</a>
                    </li>
                    <li>
                      <a href="category.html">Celebrity</a>
                    </li>
                    <li>
                      <a href="category.html">Startups</a>
                    </li>
                    <li>
                      <a href="category.html">Travel</a>
                    </li>
                  </ul>
                </div> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ViewArticle;
