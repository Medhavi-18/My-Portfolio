import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava, FaAndroid } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiHtml5, DiCss3 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiC } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'C++': <CgCPlusPlus />,
        'C': <SiC />,
        'Java': <FaJava />,
        'Postman': <SiPostman />,
        'React': <FaReact />,
        'Javascript': <DiJavascript1 />,
        'Node': <DiNodejs />,
        'Express': <SiExpress />,
        'MongoDb': <SiMongodb />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Npm': <FaNpm />,
        'Figma': <FaFigma />,
        'Bootstrap': <FaBootstrap />,
        'Vercel': <SiVercel />,
        'Python': <FaPython />,
        'HTML': <DiHtml5 />,
        'CSS': <DiCss3 />,
        'Android': <FaAndroid />
    };
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
};

export default Skills;
