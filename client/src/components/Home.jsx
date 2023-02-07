import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
                <p className="text-[#fe0068]">Hi my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Eric Deleon</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#6c7cab]">I'm a Full Stack Developer.</h2>
                <p className="text-[#6c7cab] py-4 max-w-[700px]">I’m a full-stack developer with a focus on front-end development. As a Creative Director, I apply my passion for visual storytelling and UXUI design to my work as a developer. I use my comprehensive knowledge of digital and print applications to create robust processes and implement best practices. Let's take a journey together and develop something cool along the way.</p>
                <div>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fe0068] hover:border-[#fe0068]">
                            Peep the Steez
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