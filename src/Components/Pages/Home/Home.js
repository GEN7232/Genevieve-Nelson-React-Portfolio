import React from 'react';
// import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import Button from 'react-bootstrap/Button';

function Home( ) {
    return (
        <div className='home-container'>
              <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/GEN7232' target='_blank'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/genevieve-nelson-b13b65186/' target='_blank'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href='https://www.facebook.com/genevieveelizabeth/' target='_blank'>
                            <i class="fa-brands fa-facebook-f"></i>
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
                        <a href="Genevieve-Nelson-Resume-2023.pdf" download="Genevieve-Nelson-Resume-2023.pdf">
                            <Button className='button' variant='dark'>
                                Get Resume
                            </Button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
            {/* <Profile /> */}
            <Footer />
            <p>
                 Hello, I'm Genevieve Nelson, and I am a fullstack web developer proficient in HTML, CSS, Javascript, and MERN programming. I initially went to school for Audio Engineering at the Unviersity of New Haven, and spent several years working out of recording studios in New York and New Jersey. I like to use the skills I learned in the studio and apply them to programming. In particular I love being both creative and technical at the same time. I find it to be incredibly engaging. I am also very good at troubleshooting after years of working with vintage audio gear and recording software.
            </p>
        </div>
    );
}

export default Home;