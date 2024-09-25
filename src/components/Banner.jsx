import React from 'react';
import { FaStar } from 'react-icons/fa';

const Banner = () => {
  const bannerData = {
    title: 'Enchanted Forest Adventure',
    rating: 4.5,
    description:
      'Embark on a magical journey through lush forests and hidden wonders. Discover the secrets of nature in this captivating adventure.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e'
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerData.image})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-end h-full p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">{bannerData.title}</h1>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.floor(bannerData.rating)
                  ? 'text-yellow-400'
                  : 'text-gray-400'
              }`}
            />
          ))}
          <span className="ml-2">{bannerData.rating.toFixed(1)}</span>
        </div>
        <p className="mb-4 max-w-2xl">{bannerData.description}</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Details
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Watch Now
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-lg overflow-hidden">
        <img
          src={bannerData.image}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
