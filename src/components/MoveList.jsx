import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';

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

  const handleTrailer = async (id) => {
    setTrailerKey('');
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);

      console.log(error);
    }
  };
  return (
    <div className="text-white p-10 mb-10">
      <h2 className=" uppercase text-3xl font-bold">{title}</h2>

      <div className="relative overflow-hidden">
        <Carousel
          responsive={responsive}
          className="flex items-center space-x-5"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="relative w-[200px] h-[300px] "
              onClick={() => handleTrailer(item.id)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md group">
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

export default MoveList;
