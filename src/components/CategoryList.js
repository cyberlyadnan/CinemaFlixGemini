import React from "react";
import PosterCard from "./PosterCard";

const CategoryList = ({ title, data }) => {
  return (
    <div className="relative pb-8 -mt-[100px] mb-4">
      <div className="absolute top-0 left-0 px-3">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex overflow-x-auto scroll-smooth hide-scrollbar p-4 pt-16 lg:pt-20">
        {data?.map((poster) => (
          <PosterCard key={poster.id} imageId={poster.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;


