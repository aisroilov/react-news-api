import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.urlToImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Link href={props.url} target="_blank">
            Source
          </Card.Link>
          <Link style={{ float: "right" }} to="news-info/1">
            More
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsItem;
