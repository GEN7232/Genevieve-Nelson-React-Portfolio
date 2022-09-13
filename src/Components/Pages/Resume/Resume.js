import React from 'react';
import resume from '../../../assets/Resume/Genevieve-Nelson-Resume-2022.png'
import './Resume.css';

function Resume() {
    return (
        <div className='container'>
            <h1>Click below to download my resume!</h1>
             <a href="Genevieve-Nelson-Resume-2022.pdf" download="Genevieve Genevieve-Nelson-Resume-2022.pdf">  
                <img className='res-img' src={resume} alt="Genevieve Nelson Resume" />
            </a>    

        </div>
    );
}

export default Resume;