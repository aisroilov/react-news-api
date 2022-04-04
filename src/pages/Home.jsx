import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import News from "../components/News";
import axios from "axios";
import MyPagination from "../components/MyPagination";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPageLimit = 5;
  const itemsPerPage = 20;
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      if (searchTerm === "") {
        await axios
          .get(
            `https://newsapi.org/v2/everything?q=bitcoin&apiKey=7376a1a3dba94f959ff8dc61327ba6a9&page=${nextPage}`
          )
          .then((res) => {
            setNews(res.data.articles);
            setTotalPages(Math.ceil(res.data.totalResults / itemsPerPage));
            setLoading(false);
            console.log(res.data);
          });
      } else {
        await axios
          .get(
            `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=7376a1a3dba94f959ff8dc61327ba6a9`
          )
          .then((res) => {
            setNews(res.data.articles);
            setLoading(false);
            console.log(res.data);
          });
      }
    };
    fetch();
  }, [searchTerm, nextPage]);

  const searchTermHandler = (clickedSearchTerm) => {
    setSearchTerm(clickedSearchTerm);
    console.log(clickedSearchTerm);
  };

  const handleClick = (pageNumber) => {
    setNextPage((pageNumber - 1) * itemsPerPage);
    setCurrentPage(pageNumber);
    // console.log(pageNumber);
  };

  return (
    <div>
      <MyNavbar handler={searchTermHandler} />
      <br />
      <MyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleClick={handleClick}
      />
      <News news={news} />
      <MyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;
