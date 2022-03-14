import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  return (
    <>
      <Container>
        <div class="d-flex flex-wrap">
          {props.news.map((news) => (
            <div class="p-2" style={{ width: "33%" }}>
              <NewsItem
                author={news.author}
                description={news.description}
                publishetAt={news.publishetAt}
                source={news.source}
                title={news.title}
                url={news.url}
                urlToImage={news.urlToImage}
              ></NewsItem>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default NewsList;
