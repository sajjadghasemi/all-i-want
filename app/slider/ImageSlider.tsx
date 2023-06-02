"use client";

import { useState, useEffect } from "react";
import { SliderData } from "./sliderData";

const ImageSlider = ({ slide }) => {
    const [current, setCurrent] = useState(0);
    const length = slide.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slide) || slide.length <= 0) {
        return null;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <section className="relative h-screen flex justify-center items-center">
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-8 font-bold z-10 cursor-pointer select-none"
            >
                prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-8 font-bold z-10 cursor-pointer select-none"
            >
                next
            </button>
            {SliderData.map((slide, index) => (
                <div
                    key={index}
                    className={
                        index === current
                            ? "duration-1000 opacity-100 ease-in scale-110 flex justify-center"
                            : "opacity-0 duration-1000 ease-in"
                    }
                >
                    {index === current && (
                        <img
                            className="w-5/6 h-auto rounded-xl aspect-video"
                            src={slide.image}
                            alt=""
                        />
                    )}
                </div>
            ))}
        </section>
    );
};

export default ImageSlider;
