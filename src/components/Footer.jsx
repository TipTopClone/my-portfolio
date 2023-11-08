import React from 'react';

import { styles } from '../Styles';

import { github, chrome, linkedin } from '../assets';

const Footer = () => {
  const iconSize = 'w-6 h-6'; // Define a common size for the icons

  return (
    <footer
      className={`
        ${styles.paddingX} w-full h-[100px] space-x-3 flex justify-center items-center
        bg-primary`}
    >
      <div className={styles.sectionSubText}>&copy;2023 Sujan Mahat</div>

      <div className='flex items-center space-x-3'>
        <a
          href='https://github.com/TipTopClone'
          target='_blank'
          rel='noopener noreferrer'
          className={`black-gradient rounded-full flex justify-center items-center cursor-pointer ${iconSize}`}
        >
          <img src={github} alt='GitHub' />
        </a>

        <a
          href='https://www.linkedin.com/in/sujan-mahat/'
          target='_blank'
          rel='noopener noreferrer'
          className={`black-gradient rounded-full flex justify-center items-center cursor-pointer ${iconSize}`}
        >
          <img src={linkedin} alt='LinkedIn' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
