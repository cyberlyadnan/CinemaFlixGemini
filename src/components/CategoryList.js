import React from "react";
import PosterCard from "./PosterCard";

const CategoryList = ({ title, data }) => {
  return (
    <div className="relative pb-4 lg:-mt-[280px] lg:mb-[200px] mt-1 mb-1">
      <div className="absolute top-0 left-0 px-3">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex overflow-x-auto scroll-smooth hide-scrollbar p-4 pt-12 lg:pt-20">
        {data?.map((poster) => (poster?.poster_path !== undefined ?
          <PosterCard key={poster?.id} imageId={poster?.poster_path} />: ""
        ))}
      </div>
    </div>
  );
};

export default CategoryList;


