import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    NotesProDesc: "An Android application designed to enhance productivity through advanced note-taking features.",
    NotesProGithub: "https://github.com/Medhavi-18/Notes-Pro",
    NotesProWebsite: "",

    QuizAppDesc: "A simple Android quiz application featuring multiple-choice questions to test knowledge across various topics.",
    QuizAppGithub: "https://github.com/Medhavi-18/Quiz-App",
    QuizAppWebsite: "",

    ParentalAppDesc: "An Android application designed for parental control, providing features for monitoring and managing children's device usage.",
    ParentalAppGithub: "https://github.com/Medhavi-18/Parental_App",
    ParentalAppWebsite: "",
  };

  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
            
            <a href={desc[projectName + 'Github']} target='_blank' rel='noopener noreferrer'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  );
}

export default ProjectBox;
