import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  
  return (
    <>
      <div className="col-md-4">
        <div
          className="post-entry shadow-lg"
          data-aos-delay="400"
          data-aos="zoom-in"
          style={{ height: "400px" }}
        >
          <Link to={`/Låtdiginspireras/${article._id}`} className="d-block mb-4">
            <img src={article.image} alt="Article" height="150" width="100%" />
          </Link>
          <div className="mask post-text px-1">
            <h5>
              <Link to={`/Låtdiginspireras/${article._id}`}>
                {article.title.length > 25
                  ? article.title.substring(0, 25) + "..."
                  : article.title}
              </Link>
            </h5>
            <p dangerouslySetInnerHTML={{__html:article.content.length > 200
                ? article.content.substring(0, 200) + "..."
                : article.content}}>                
            </p>
            <p>
              <Link
                to={`/Låtdiginspireras/${article._id}`}
                className="readmore"
                style={{ position: "absolute", bottom: "0px" }}
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
