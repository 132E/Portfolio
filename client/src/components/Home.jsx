import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
                <p className="text-[#fe0068]">Welcome to my portfolio, I am</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Eric Deleon:</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#6c7cab]">A Full Stack Developer</h2>
                <p className="text-[#6c7cab] py-4 max-w-[700px]">with a Passion for Visual Storytelling. Blending technical expertise with a background in Art Direction, I create web experiences that tell stories and solve problems. With a unique combination of technical skill and creative vision, I help turn ideas into reality. Ready to bring your next project to life?</p>
                <div>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fe0068] hover:border-[#fe0068]">
                            Explore My Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3"/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;