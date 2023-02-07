import React from 'react'
import HTX from '../assets/HTXTalent.png';
import ORDRS from '../assets/Ordrs.png';
import AUTO from '../assets/Automedic.png';
import DIRECT from '../assets/DirectCare.png';
import CYCLE from "../assets/CycleList.png";
import UPROOT from "../assets/UprootTalent.png";

const Work = () => {
    return( 
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fe0068] text-gray-300'>Portfolio</p>
                    <p className='py-6'>//Peep the latest and greatest work</p>
                </div>

                {/* Container */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>

                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${UPROOT})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Uproot Talent Job Board
                            </span>
                            <p className='text-center py-2'>Wordpress Site</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://uproottalent.co/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}

                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${HTX})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                HTX Talent Job Board
                            </span>
                            <p className='text-center py-2'>UX/UI Design</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://www.htxtalent.com/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}

                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${ORDRS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Ordrs Landing Page
                            </span>
                            <p className='text-center py-2'>UX/UI Design</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://www.ordrs.io/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}

                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${AUTO})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Automedic Website
                            </span>
                            <p className='text-center py-2'>UX/UI Design</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://automedichouston.com/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}

                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${DIRECT})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Physicians Website
                            </span>
                            <p className='text-center py-2'>UX/UI Design</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://www.directcarehtx.com/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                {/* <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}

                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${CYCLE})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            CycleList App
                            </span>
                            <p className='text-center py-2'>P.E.R.N. Stack</p>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://cyclelist.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Visit Site</button>
                                </a>
                                <a href='https://github.com/frank-booth/CycleList_Frontend'>
                                    <button className='text-center rounded-lg px-4 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Work;