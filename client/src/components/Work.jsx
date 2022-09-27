import React from 'react'
import HTX from '../assets/HTXTalent.png';
import ORDRS from '../assets/Ordrs.png';
import AUTO from '../assets/Automedic.png';

const Work = () => {
    return( 
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#fe0068] text-gray-300'>Portfolio</p>
                    <p className='py-6'>//Peep the latest and greatest work</p>
                </div>

                <div style={{backgroundImage: `url(${HTX})`}}
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#6c7cab] tracking-wider'>
HTX Talent Job Board
                            </span>
                            <div className='pt-8 text-center'>
                                
                                <a href='https://www.htxtalent.com/'>
                                    <button>Visit Site</button>
                                </a>
                                <a href='/'>
                                    <button>Code</button>
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