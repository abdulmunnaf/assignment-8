"use client"
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80",
        title: "Discover Your Perfect Aesthetic",
        desc: "Transform your spaces with our exquisite collection of premium artisanal tiles.",
        buttonText: "Browse Now",
        link: "/all-tiles"
    },
    {
        img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&auto=format&fit=crop&q=80",
        title: "Craftsmanship in Every Detail",
        desc: "Explore natural stones, hand-painted ceramics, and modern geometric porcelain.",
        buttonText: "Browse Now",
        link: "/all-tiles"
    }
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const titleAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-30px)" },
        to: { opacity: 1, transform: 'translateY(0px)' },
        reset: true,
        key: current,
        config: { tension: 120, friction: 14 }
    });

    const descAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-20px)" },
        to: { opacity: 1, transform: 'translateY(0px)' },
        reset: true,
        key: current,
        delay: 200,
        config: { tension: 120, friction: 14 }
    });

    const btnAnimation = useSpring({
        from: { opacity: 0, scale: 0.9 },
        to: { opacity: 1, scale: 1 },
        reset: true,
        key: current,
        delay: 450,
        config: { tension: 150, friction: 12 }
    });

    return (
        <div className="w-full mt-6 flex justify-center">
            <div className="w-11/12 rounded-2xl overflow-hidden h-[60vh] md:h-[70vh] relative shadow-xl border border-slate-100">
                
                {/* Carousel container */}
                <div
                    className='flex h-full transition-transform duration-1000 ease-in-out'
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                        width: `${slides.length * 100}%`
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className='h-full flex-shrink-0 bg-cover bg-center relative'
                            style={{ 
                                backgroundImage: `url(${slide.img})`,
                                width: '100%'
                            }}
                        >
                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10' />
                            
                            {/* Content */}
                            <div className='text-white md:pl-20 p-6 md:p-12 h-full flex flex-col justify-center relative z-20 max-w-2xl'>
                                <animated.h1
                                    style={index === current ? titleAnimation : {}}
                                    className='text-4xl md:text-6xl font-extrabold md:mb-6 tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent'>
                                    {slide.title}
                                </animated.h1>

                                <animated.p 
                                    style={index === current ? descAnimation : {}}
                                    className='text-base md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl'>
                                    {slide.desc}
                                </animated.p>

                                <animated.div style={index === current ? btnAnimation : {}}>
                                    <Link 
                                        href={slide.link}
                                        className='inline-block btn bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-semibold px-8 py-3 border-none shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-base'>
                                        {slide.buttonText}
                                    </Link>
                                </animated.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-amber-500 w-6' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;