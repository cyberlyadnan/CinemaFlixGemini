import React, { useState } from 'react';
import { faqs } from '../../Utils/mockdata';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="text-center">
              <button
                className="w-full md:w-8/12 text-left py-4 px-6 bg-[rgb(45,45,45)] focus:outline-none focus:bg-[rgb(65,65,65)] hover:bg-[rgb(65,65,65)] mx-auto"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-xl lg:text-2xl">{faq.question}</span>
                  <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="w-full md:w-8/12 mx-auto bg-[rgb(60,60,60)] py-4 px-6 mt-2">
                  <p className="text-base md:text-lg lg:text-xl">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 mb-16 flex flex-col md:flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Email address"
            className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4 bg-black bg-opacity-50 border border-gray-600 text-white p-3 rounded"
          />
          <button className="w-full md:w-auto text-white px-5 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
