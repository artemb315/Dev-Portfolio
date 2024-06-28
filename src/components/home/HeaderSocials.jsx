import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/artemb315' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/artem-baranov' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='whatsapp://send?phone=48459567542&text=Hello,%20I%20visited%20your%20profile%20%E2%9D%A4%EF%B8%8F.' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>

        </div>
    );
};

export default HeaderSocials;
