import React, { useEffect, useState } from "react";
import axios from "axios";

import NewsItem from "./NewsItem";
import NewsList from "./NewsList";

const News = () => {
  const [news, setNews] = useState([]);

  function fetchNewsHandler() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=7376a1a3dba94f959ff8dc61327ba6a9"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNews(data.articles);
        console.log(data.articles);
      })
      .catch();
  }

  return (
    <>
      <button onClick={fetchNewsHandler}>Fetch</button>
      <NewsList news={news}></NewsList>
    </>
  );
};

export default News;
