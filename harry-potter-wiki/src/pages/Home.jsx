import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container h-[92vh] w-[100%] flex flex-col lg:flex-row justify-around">
        <Link to="/books">
          <div className="home-box w-full sm:w-40 text-amber-50 p-8 rounded-2xl m-4 bg-blue-900 text-center font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer">
            📚Books
          </div>
        </Link>
        <Link to="/spells">
          <div className="home-box w-full sm:w-40 text-amber-50 p-8 rounded-2xl m-4 bg-blue-900 text-center font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer ">
            🪄Spells
          </div>
        </Link>
        <Link to="/characters">
          <div className="home-box w-full sm:w-42 text-amber-50 p-8 rounded-2xl m-4 bg-blue-900 text-center font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer">
            🧙‍♂️ Characters
          </div>
        </Link>
        <Link to="/houses">
          <div className="home-box w-full sm:w-36 text-amber-50 p-8 rounded-2xl m-4 bg-blue-900 text-center font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 active:scale-95 cursor-pointer">
            🏚️Houses
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
