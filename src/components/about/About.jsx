import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Artem, and I'm based in Warsaw, Poland. I graduated from University of Glasgow, where I completed my M.S. in Information Technology.<br /><br />
                            Artem is an experienced Senior Software Engineer and Tech Lead with a strong background in developing scalable front-end applications and robust back-end systems as well as Machine Learning, Database Design. He has a proven track record of leading projects that utilize cuttingedge technologies like React, Vue, Node.js, Golang, and Python.
                            <br /><br />
                            Artem has exltensive experience in cloud computing, including AWS, Docker, Kubernetes and GCP, and excels in creating dynamic user interfaces, high-performance APIs, and implementing microservice architectures. He is adept at optimizing SQL and NoSQL database performance and using CI/CD tools for automated deployment. In Agile environments, Artem has successfully led cross-functional teams, mentored junior developers, and ensured the delivery of high-quality, innovative solutions, leveraging Agile methodologies to enhance project efficiency and adaptability.
                        </p>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About