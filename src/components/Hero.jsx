// import React from 'react';
// import { motion } from 'framer-motion';

// import { styles } from '../Styles';
// import { ComputersCanvas } from './canvas';

// const Hero = () => {
//   return (
//     <section className=' relative w-full h-screen mx-auto'>
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915eff]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div className='   min-h-max'>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915eff]'>Sujan Mahat</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             I'm a Full Stack Developer,
//             <br className='sm:block hidden' /> specializing in creating
//             beautiful
//             <br className='sm:block hidden' /> and functional web applications.
//           </p>
//         </div>
//       </div>
//       <ComputersCanvas />

//       <div
//         className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center
// '
//       >
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop',
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Resume, HireMe } from '../assets';

import { styles } from '../Styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const HireMeButton = () => {
    const handleDownloadResume = () => {
      const anchor = document.createElement('a');
      anchor.download = 'Sujan_Mahat_Resume.pdf';
      anchor.href = Resume; // Using the imported Resume file
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    };

    return (
      <div className='hidden sm:block absolute top-20 right-1 w-34 h-34'>
        <div className='relative'>
          <img
            src={HireMe}
            alt='Hire Me'
            className='w-32 h-32 object-cover rounded-full animate-spin-slow'
          />
          <button
            className='flex items-center justify-center absolute inset-0 text-sm  text-white font-semibold cursor-pointer bg-transparent border-none '
            onClick={handleDownloadResume}
          >
            Resume
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='min-h-max'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Sujan Mahat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Developer,
            <br className='sm:block hidden' /> specializing in Frontend
            <br className='sm:block hidden' /> and Backend software development.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      <HireMeButton />
    </section>
  );
};

export default Hero;
