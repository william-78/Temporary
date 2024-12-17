import React, { useState, } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import freeDeliveryIcon from '../assets/icons/free-delivery-2.png';
import customerServiceIcon from '../assets/icons/customer-service-2.png';
import backgroundImage1 from '../assets/bg/h-3-3.jpg';
import backgroundImage2 from '../assets/bg/background-2.jpg';
import backgroundImage3 from '../assets/bg/h-3-1.jpg';
import Navbar from '../Pages/Navbar';
import Content from '../Pages/content';

const backgroundData = [
  {
    image: backgroundImage1,
    heading: 'Strengthen Your Roots Fortify Your Hair from the Roots Up',
    paragraph: 'Our natural formula deeply nourishes your scalp, strengthening hair at the root and reducing hair loss over time. Experience the difference of resilient, healthy hair',
  },
  {
    image: backgroundImage2,
    heading: 'Promote Hair Growth Naturally',
    paragraph: 'Achieve Fuller, Thicker Hair Naturally.Packed with powerful, plant-based ingredients, our products are designed to encourage healthy hair growth and volume without harsh chemicals',
  },
  {
    image: backgroundImage3,
    heading: 'Gentle Care with Pure, Organic Ingredients',
    paragraph: 'Free from sulfates and parabens, our shampoo and oil provide safe, gentle care that keeps your hair soft, smooth, and full of life.',
  },
];

function App() {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      prevIndex === 0 ? backgroundData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      prevIndex === backgroundData.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <>
      <div
        className="bg-cover bg-center font-font"
        style={{ backgroundImage: `url(${backgroundData[currentBackgroundIndex].image})` }}
      >
        <header className="py-1">
          <div className=" text-center text-white">
            <nav className="mt-2">
              <div className="flex justify-around items-center">
                <div className="hidden md:flex top-left items-center">
                  <img src={freeDeliveryIcon} alt="Free Delivery Icon" />
                  <p className="ml-2">Free home delivery</p>
                  <span className="font-bold ml-2">All Over Pakistan</span>
                </div>

                <div className="top-right flex items-center space-x-2 md:space-x-4">
                  {/* Facebook Icon */}
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-yellow-500 transition-colors duration-300">
                    <a href="https://www.facebook.com" className="md:text-sm text-base text-white">
                      <FaFacebook />
                    </a>
                  </div>

                  {/* TikTok Icon */}
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-yellow-500 transition-colors duration-300">
                    <a href="https://www.tiktok.com" className="md:text-sm text-base text-white">
                      <FaTiktok />
                    </a>
                  </div>

                  {/* Instagram Icon */}
                  <div className="bg-gray-700 rounded-full p-3 hover:bg-yellow-500 transition-colors duration-300">
                    <a href="https://www.instagram.com" className="md:text-sm text-base text-white">
                      <FaInstagram />
                    </a>
                  </div>

                  {/* Customer Service Icon */}
                  <div className="hidden lg:flex items-center">
                    <img src={customerServiceIcon} alt="Customer Service Icon" className="w-8 h-auto" />
                    <span className="font-bold ml-2">Need Help?</span>
                    <a href="tel:+92335-904400" className="ml-2 text-white hover:underline">
                      +92335-904400
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="line bg-gray-600 h-px w-full my-2"></div>
        <Navbar />
        <Content
          heading={backgroundData[currentBackgroundIndex].heading}
          paragraph={backgroundData[currentBackgroundIndex].paragraph}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
    </>
  );
}

export default App;
