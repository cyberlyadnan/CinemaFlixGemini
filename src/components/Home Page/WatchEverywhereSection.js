import React from 'react'
import devicesImage from "../../Images/device.png"

const WatchEverywhereSection = () => {
  return (
    <div className="bg-black text-white py-16 px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Watch everywhere.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={devicesImage} alt="Devices" className="w-full max-w-lg mx-auto relative z-10" />
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <video
              src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"}
              autoPlay
              loop
              muted
              className="w-5/12 md:w-5/12 md:h-auto absolute"
              style={{ top: '8%', left: '30%' }} // Adjust these values to fit the video inside the devices image
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchEverywhereSection
