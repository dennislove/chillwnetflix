import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

const DesignListItem = ({ key }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  const designItems = [
    {
      id: 1,
      name: 'Design 1',
      image:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      name: 'Design 2',
      image:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      name: 'Design 3',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      name: 'Design 4',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'
    },
    {
      id: 5,
      name: 'Design 5',
      image:
        'https://images.unsplash.com/photo-1551651653-c5186a1fbba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 6,
      name: 'Design 6',
      image:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      id: 7,
      name: 'Design 7',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 8,
      name: 'Design 8',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(6);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(4);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= designItems.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? designItems.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden" key={key}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          width: `${(designItems.length / itemsToShow) * 100}%`
        }}
      >
        {designItems.map((item) => (
          <div key={item.id} className="relative w-full lg:w-1/6 md:w-1/4 p-2">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md group">
              <img
                src={item.image}
                alt={item.name}
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
              <p className="absolute bottom-4 left-2 m-2 px-2 py-1  text-white font-bold rounded uppercase ">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md"
        aria-label="Next slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default DesignListItem;
