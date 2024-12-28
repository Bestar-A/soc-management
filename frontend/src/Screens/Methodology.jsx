import React, { useEffect, useState } from "react";
import WaveEffect from "../components/WaveEffect";
import { useGetAllArticlesQuery } from "../store/slices/articleSlice";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";
import Message from "../components/Message";
import TypeEffect from "../components/TypeEffect";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../store/slices/categorySlice";

const Methodology = () => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const {
    data: oarticles,
    refetch,
    isLoading,
    error,
  } = useGetAllArticlesQuery();
  const {
    data: categories,
    refetch: categoryRefetch,
    isLoading: categoryLoading,
  } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (oarticles) {
      setArticles(oarticles);
    }
    refetch();
    if (!categoryLoading) {
      categoryRefetch();
    }
  }, [oarticles, articles, refetch, categoryRefetch, categoryLoading]);

  console.log(articles[articles.length - 1]);
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(articles.length / 6) &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {" "}
          {error?.data?.message || error.error}{" "}
        </Message>
      ) : (
        <>
          <WaveEffect
            title={"Methodology Page"}
            content={"This page provides users with guidance on how to complete the assessment and a brief introduction, derived from the content in the original Excel sheet."}
          />
          {/* <section className="section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-9">
                  <div className="row">
                    {articles.slice(page * 6 - 6, page * 6).map((article) => (
                      <ArticleCard key={article._id} article={article} />
                    ))}
                  </div>
                  <div className="row">
                    {articles.length > 0 && (
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <span
                              className="page-link"
                              onClick={() => handlePageChange(page - 1)}
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">&laquo;</span>
                            </span>
                          </li>
                          {[...Array(Math.ceil(articles.length / 6))].map(
                            (_, i) => (
                              <li
                                className={`page-item ${
                                  i + 1 === page ? "active" : ""
                                }`}
                                key={i + 1}
                              >
                                <span
                                  className="page-link"
                                  onClick={() => handlePageChange(i + 1)}
                                >
                                  {i + 1}
                                </span>
                              </li>
                            )
                          )}

                          <li className="page-item">
                            <span
                              className="page-link"
                              onClick={() => handlePageChange(page + 1)}
                              aria-label="Next"
                            >
                              <span aria-hidden="true">&raquo;</span>
                            </span>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>
                </div>

                <div className="col-md-3 sidebar">
                  <div className="sidebar-box">
                    <form action="#" className="search-form">
                      <div className="form-group">
                        <span className="icon fa fa-search"></span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type a keyword and hit enter"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="sidebar-box">
                    <div className="categories">
                      <h3>Categories</h3>
                      {!categoryLoading &&
                        categories.map((category) => (
                          <li key={category._id}>
                            <Link>
                              <i className="bi bi-chevron-right"></i>{" "}
                              {category.category}
                            </Link>
                          </li>
                        ))}
                    </div>
                  </div>
                  <div className="sidebar-box">
                    <h3>Latest Articles</h3>
                    {articles.length && (
                      <>
                        <TypeEffect
                          string={articles[articles.length - 1].content}
                        />
                        <p>
                          <Link to={`/Låtdiginspireras/${articles[articles.length - 1]._id}`} >
                          <span className="btn btn-primary btn-sm">
                            Read More
                          </span>
                          </Link>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </>
      )}
    </>
  );
};

export default Methodology;
