import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CarouselComponent = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <div className="flex">
                    {React.Children.map(children, (child, index) => (
                        <>
                            <button onClick={prevSlide} className="mx-2 py-6 rounded-full focus:outline-none absolute left-0 top-72">
                                <span className='lg:w-10 w-5 h-1 bg-dark block -rotate-45 mb-2 lg:mb-6'></span>
                                <span className='lg:w-10 w-5 h-1 bg-dark block rotate-45'></span>
                            </button>
                            <button onClick={nextSlide} className="mx-2 py-6 rounded-full focus:outline-none absolute right-0 top-72">
                                <span className='lg:w-10 w-5 h-1 bg-dark block rotate-45 mb-2 lg:mb-6'></span>
                                <span className='lg:w-10 w-5 h-1 bg-dark block -rotate-45'></span>
                            </button>
                            <div
                                key={index}
                                className={`w-full flex-shrink-0 ${index === activeIndex ? 'block' : 'hidden'}`}
                            >
                                {child}
                            </div>

                        </>
                    ))}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-center mb-4">



            </div>
        </div>
    );
}

export default CarouselComponent