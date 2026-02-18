import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      
      <div className="home-container h-[92vh] w-[100%] flex flex-row justify-around md:flex-col">
        <Link to="/books">
          <div className="home-box bg-blue-900 text-amber-50 p-8 rounded-2xl m-4 md:p-2 md:m-2">
            Books
          </div>
        </Link>
        <Link to="/spells">
          <div className="home-box bg-blue-900 text-amber-50 p-8 rounded-2xl m-4 ">
            Spells
          </div>
        </Link>
        <Link to="/characters">
          <div className="home-box bg-blue-900 text-amber-50 p-8 rounded-2xl m-4 ">
            Characters
          </div>
        </Link>
        <Link to="/houses">
          <div className="home-box bg-blue-900 text-amber-50 p-8 rounded-2xl m-4 ">
            Houses
          </div>
        </Link>
      </div>
      
    </>
  );
};

export default Home;
