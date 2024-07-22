import React from 'react';
import resume from '../../../assets/Resume/Genevieve-Nelson-Resume-2024.png'
import './Resume.css';


function Resume() {
    return (
        <div className='container'>
             <a href="Genevieve-Nelson-Resume-2024.pdf" download="Genevieve-Nelson-Resume-2024.pdf">
                <h1>Click to download my resume!</h1>
            </a>
             <a href="Genevieve-Nelson-Resume-2024.pdf" download="Genevieve-Nelson-Resume-2024.pdf">  
                <img className='res-img' src={resume} alt="Genevieve Nelson Resume" />
            </a>    

        </div>
    );
}

export default Resume;