import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/GEN7232' target='_blank'>
                            <i className='fa fa-github-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/genevieve-nelson-b13b65186/' target='_blank'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://www.facebook.com/genevieveelizabeth/' target='_blank'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Genevieve Nelson</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>

                            </h1>
                            <span className='profile-role-tagline'>
                                Making each application rock in its own way!
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="Genevieve-Nelson-Resume-2022.pdf" download="Genevieve Genevieve-Nelson-Resume-2022.pdf">
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;