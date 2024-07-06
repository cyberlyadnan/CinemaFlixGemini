import React from 'react';
import kidsImage from '../../Images/kids.png';

const KidsSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-28 border-b-8 border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Create profiles for kids.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img src={kidsImage} alt="Kids" className="w-full max-w-lg mx-auto relative z-10" />
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
