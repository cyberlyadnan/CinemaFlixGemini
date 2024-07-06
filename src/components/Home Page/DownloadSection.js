import React from 'react';

const DownloadSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-28 border-b-8 border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 mb-6 md:mb-0 relative">
          <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} alt="Mobile" className="w-full max-w-lg mx-auto relative z-10" />
          <div className="absolute inset-0 flex justify-center items-center z-0">
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Download your shows to watch offline.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

