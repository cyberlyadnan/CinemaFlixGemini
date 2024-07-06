import React from 'react'
import tvImage from "../../Images/tv.png";

const TvSection = () => {
  return (
    <div className="bg-black text-white py-16 px-28 border-b-8 border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Enjoy on your TV.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={tvImage} alt="TV" className="w-full max-w-lg mx-auto relative z-10" />
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <video
              src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"}
              autoPlay
              loop
              muted
              className="w-[400px] h-auto  absolute"
              style={{ top: '15%', left: '21%' }} // Adjust these values to fit the video inside the TV image
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TvSection
