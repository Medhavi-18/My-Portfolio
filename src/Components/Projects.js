import React from 'react';
import ProjectBox from './ProjectBox';
import NotesProImage from '../images/NotesProImage.jpeg';
import QuizAppImage from '../images/QuizApp.jpeg';
import ParentalAppImage from '../images/ParentalAppImage.jpeg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={NotesProImage} projectName="NotesPro" />
        <ProjectBox projectPhoto={QuizAppImage} projectName="QuizApp" />
        <ProjectBox projectPhoto={ParentalAppImage} projectName="ParentalApp" />
      </div>
    </div>
  );
}

export default Projects;
