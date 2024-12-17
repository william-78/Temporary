import React, { useEffect } from 'react';
import firstLeaf from '../assets/icons/s-2-1.png';
import mainImage1 from '../assets/about/hair-fall-solution.jpg';
import image1Person from '../assets/author/auth-1.jpg';
import personSign from '../assets/signature/signature-1.png';

const Pages = () => {
  useEffect(() => {
    const heading = document.querySelector('h2');
    if (heading) {
      heading.textContent = heading.textContent.split(' ')
      .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
    }
  }, []);
 


  return (
<>
    
    <div className="container mx-auto px-6 lg:px-20 mb-20">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-3 pt-16 font-font">
        <img src={firstLeaf} alt="Leaf Icon" className="w-28 h-auto" />
        <span className="text-[#47b32d] text-lg font-black tracking-wide">
          Welcome to ZTCosmetics
        </span>
        <h2 className="text-4xl lg:text-[4rem] font-bold lg:w-2/3 text-center leading-snug">
          Nourish and revive your hair with our magical blend!
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-16">
        {/* Left Content */}
        <div className="px-28 w-full lg:w-1/2 space-y-6 text-left">
        
          <p className=" text-gray-500 leading-relaxed text-lg">
            Welcome to HairTreatment, where we believe that every strand of hair
            deserves a royal treatment! Our mission is to revolutionize your
            hair care routine with our premium hair oils and shampoos that are
            as effective as they are luxurious. Say goodbye to bad hair days and
            hello to luscious locks!
          </p>
          <p className="text-gray-500 leading-relaxed text-lg mb-6">
            Whether you have curly, straight, or wavy hair, we have the perfect
            solution for you.
          </p>

          {/* Author Section */}
          <div className="flex space-x-4 mt-12">
            {/* Circular Wrapper */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-[1px] border-solid border-gray-300">
              <img
                className="rounded-full w-20 h-20 object-cover"
                src={image1Person}
                alt="author"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Zubair Khan</h1>
              <span className="text-gray-600 block">Director and Founder</span>
              <img src={personSign} alt="Signature" className="mt-2 w-24" />
            </div>
          </div>

        </div>
      

      {/* Right Content */}
      <div className="relative w-full lg:w-2/3 mt-10 lg:mt-0">
        <div className="absolute top-[-16px] right-[-16px] -z-10 w-1/2 h-[60%] bg-[#ffcb24] rounded-tr-3xl"></div>
        <img
          className="relative rounded-3xl shadow-lg w-full object-cover"
          src={mainImage1}
          alt="About"
        />
      </div>
    </div>
    </div >
    </>
  );
};

export default Pages;
