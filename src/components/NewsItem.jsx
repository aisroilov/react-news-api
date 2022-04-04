import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <>
      <Col xs={6}>
        <div className="news-item">
          <div className="img-container">
            <img className="news-img" src={props.urlToImage} />
          </div>
          <div className="body">
            <h4>{props.title}</h4>
            <span>{props.description}</span>
            <p>
              <a href={props.url} target="_blank">
                Source
              </a>
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default NewsItem;
