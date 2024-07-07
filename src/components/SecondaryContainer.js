import React from "react";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import { movieCategories } from "../Utils/constants";

const SecondaryContainer = () => {
  const store = useSelector((store) => store.movies);
  const search = useSelector(store=> store.search)

  return (
    <div className="py-4 px-4 sm:px-8 bg-black text-white text-center">
      <div className="relative z-10">

        {search.length > 0 && <CategoryList className="mb-8 lg:mb-20" title={"Search Results"} data={search} />}

        {store?.nowPlayingMovies && (
          <CategoryList title={movieCategories[movieCategories.length]} data={store.nowPlayingMovies} />
        )}
        {store?.allMovies?.length > 0 &&
          store.allMovies.map((data, index) => (
            <CategoryList title={movieCategories[index]} key={index} data={data} />
          ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
