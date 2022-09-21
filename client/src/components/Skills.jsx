import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import REACT from '../assets/react.png';
import Node from '../assets/node.png';
import Adobe from '../assets/adobeCC.png';
import Git from '../assets/github.png';
import EX from '../assets/express.png';
import Mongo from '../assets/mongo.png';
import Figma from '../assets/figma.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
    return (
        <div name="skills">
            {/* container */}
            <div>
                <div>
                    <p>Experience</p>
                    <p>// This is what I'm working with</p>
                </div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
            
        </div>
    )
};

export default Skills;