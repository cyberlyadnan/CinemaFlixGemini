import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const store = useSelector((store) => store.movies.allMovies);
  return (
    <div>
      <div className="py-4 px-8 bg-black text-white text-center">
        <div className="-mt-56 relative z-20">
          {store.map((data, index) => (
            <CategoryList key={index} data={store[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
