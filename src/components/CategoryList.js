import React from "react";
import PosterCard from "./PosterCard";

const CategoryList = ({ data }) => {
  return (
    <div className="flex overflow-x-auto scroll-smooth hide-scrollbar p-4 lg:-mt-16 -mt-12">
      {data?.map((poster) => (
        <PosterCard key={poster.id} imageId={poster.poster_path} />
      ))}
    </div>
  );
};

export default CategoryList;

