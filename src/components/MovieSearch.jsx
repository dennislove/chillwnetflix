import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MovieContext } from '../context/MovieDetailContext';
import { FaPlay } from 'react-icons/fa';

const MovieSearch = ({ data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl uppercase mb-4">Kết quả tìm kiếm</h2>

      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {data &&
          data.map((item) => (
            <div key={item.id} className="relative w-[200px] h-[300px] ">
              <div
                className="relative h-64 overflow-hidden rounded-lg shadow-md group"
                onClick={() => handleVideoTrailer(item.id)}
              >
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="text-white text-4xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    aria-label="Play"
                  >
                    <FaPlay />
                  </button>
                </div>
                <p className="absolute bottom-4 left-2 m-2 px-2 py-1  text-white bg-black bg-opacity-60 font-bold rounded uppercase ">
                  {item.title || item.original_title || item.original_name}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  data: PropTypes.array.isRequired
};

export default MovieSearch;
