import React from 'react';

const WatchEverywhereSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-28 border-b-8 border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Watch everywhere.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"} alt="Devices" className="w-full max-w-lg mx-auto relative z-10" />
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <video
              src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"}
              autoPlay
              loop
              muted
              className="w-[250px] md:w-[400px] h-auto absolute"
              style={{ top: '10%', left: '12%' }} // Adjust these values to fit the video inside the devices image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchEverywhereSection;

