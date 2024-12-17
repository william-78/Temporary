import React from 'react';
import { FaWhatsapp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Content = ({ heading, paragraph, onPrevious, onNext }) => {
  return (
    <div className="flex ml-4 items-center mt-10 lg:mt-36 font-font">
      <div className="container mx-auto flex items-center px-3 lg:px-20">
        {/* Text Content */}
        <div className="text-left max-w-3xl">
          <h1 className="text-white text-[3rem] lg:text-6xl font-black leading-1 md:ml-6 mb-6">
            {heading}
          </h1>

          <p className="max-w-lg text-white text-[1.3rem] lg:text-2xl md:ml-6 mb-8 leading-relaxed">
            {paragraph}
          </p>

          {/* Button with WhatsApp Icon */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Button 1 */}
            <a
              href="https://wa.me/923160541194"
              className="text-white bg-[#47b32d] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#47b32d] transition-colors duration-300 text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Order +92-316-054-1194
              <div className="ml-4 bg-white rounded-full p-2 transition-all hover:bg-[#47b32d]">
                <FaWhatsapp className="text-black hover:text-[#47b32d] text-xl" />
              </div>
            </a>

            {/* Button 2 */}
            <a
              href="https://wa.me/923378688572"
              className="text-white bg-[#47b32d] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#47b32d] transition-colors duration-300 text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Order +92-337-8688-572
              <div className="ml-4 bg-white rounded-full p-2 transition-all hover:bg-[#47b32d]">
                <FaWhatsapp className="text-black hover:text-[#47b32d] text-xl" />
              </div>
            </a>

            {/* Button 3 */}
            <a
              href="https://wa.me/923349343209"
              className="text-white bg-[#47b32d] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#47b32d] transition-colors duration-300 text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Order +92-334-9343-209
              <div className="ml-4 bg-white rounded-full p-2 transition-all hover:bg-[#47b32d]">
                <FaWhatsapp className="text-black hover:text-[#47b32d] text-xl" />
              </div>
            </a>

            {/* Button 4 */}
            <a
              href="https://wa.me/923310202128"
              className="text-white bg-[#47b32d] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#47b32d] transition-colors duration-300 text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Order +92-331-0202-128
              <div className="ml-4 bg-white rounded-full p-2 transition-all hover:bg-[#47b32d]">
                <FaWhatsapp className="text-black hover:text-[#47b32d] text-xl" />
              </div>
            </a>
          </div>


          {/* Navigation Buttons */}
          <div className="flex justify-start items-end gap-4 mt-20">
            <button
              onClick={onPrevious}
              className="bg-white text-black p-3 rounded-full text-gray-700 hover:bg-gray-300 transition-all"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={onNext}
              className="bg-white text-black p-3 rounded-full text-gray-700 hover:bg-gray-300 transition-all"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
