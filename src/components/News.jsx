import React from "react";
import NewsItem from "./NewsItem";
import { Container, Row } from "react-bootstrap";

const News = (props) => {
  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          {props.news.map((news) => (
            <NewsItem
              key={Math.random(1000)}
              author={news.author}
              description={news.description}
              publishetAt={news.publishetAt}
              source={news.source}
              title={news.title}
              url={news.url}
              urlToImage={news.urlToImage}
            ></NewsItem>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default News;
