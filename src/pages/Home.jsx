import React, { useState } from "react";
import MyNavbar from "../components/MyNavbar";
import News from "../components/News";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (clickedSearchTerm) => {
    setSearchTerm(clickedSearchTerm);
    console.log(clickedSearchTerm);
  };

  return (
    <div>
      <MyNavbar handler={searchTermHandler} />
      <News />
    </div>
  );
};

export default Home;
