import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import { MovieContext } from '../context/MovieDetailContext';

import { FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
const MoveList = ({ title, data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10 mb-10">
      <h2 className=" uppercase text-3xl font-bold">{title}</h2>

      <div className="relative overflow-hidden">
        <Carousel
          responsive={responsive}
          className="flex items-center space-x-5"
        >
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <div key={item.id} className="relative w-[200px] h-[300px]">
                <div className="relative h-64 overflow-hidden rounded-lg shadow-md group">
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transform duration-300"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => handleVideoTrailer(item.id)}
                  >
                    <button
                      className="text-white  text-4xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
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
        </Carousel>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              position: 'fixed',
              zIndex: 999
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%,-50%)'
            }
          }}
          contentLabel="Example Modal"
        >
          <YouTube videoId={trailerKey} opts={opts} />
        </Modal>
      </div>
    </div>
  );
};
MoveList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array
};

export default MoveList;
