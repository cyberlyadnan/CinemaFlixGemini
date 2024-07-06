import React from 'react';
import kidsImage from '../../Images/kids.png'; // Add an appropriate image for the kids section to your src directory

const KidsSection = () => {
  return (
    <div className="bg-black text-white py-16 px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={kidsImage} alt="Kids" className="w-full max-w-lg mx-auto"/>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Create profiles for kids.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
