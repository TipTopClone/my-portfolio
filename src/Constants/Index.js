import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  coles,
  JBMetro,
  ahic,
  koi,
  dentedCode,
  calculator,
  movie_list,
  ntdl,
  threejs,
  restaurant,
  ai_summariser,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Manager',
    company_name: 'Coles Group',
    icon: coles,
    iconBg: '#383E56',
    date: 'March 2019 - Nov 2021',
    points: [
      ' Led and managed a team in a high-pressure retail environment, demonstrating strong leadership and organizational skills.',
      ' Executed efficient inventory management and streamlined supply chain operations, showcasing process optimization abilities.',
      'Prioritized customer satisfaction and maintained strong communication skills, skills transferrable to IT project management.',
      'Oversaw operational budgets, financial forecasting, and cost control, highlighting financial acumen applicable to IT budgeting.',
    ],
  },
  {
    title: 'IT support Specialist',
    company_name: 'JB Metro Distributor',
    icon: JBMetro,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Present',
    points: [
      'Provided comprehensive IT support, resolving issues and optimising the website&apos;s frontend for improved performance.',
      'Assisted in troubleshooting and maintaining IT systems, ensuring minimal downtime and efficient operations.',
      'Collaborated with cross-functional teams, effectively addressing IT-related concerns and enhancing user experiences.',
      'Demonstrated versatility by combining IT support and frontend optimisation skills, contributing to overall organisational success.',
    ],
  },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const education = [
  {
    title: ' Advanced Diploma of IT',
    company_name: 'AHIC',
    icon: ahic,
    iconBg: '#383E56',
    date: 'Nov 2018- Feb 2021',
    points: [
      ' Graduated with a Diploma of IT and Advanced Diploma of Network Security from Australian Harbour International College.',
      ' Gained expertise in IT fundamentals, network security, and hands-on experience in securing digital infrastructure.',
      ' Acquired comprehensive knowledge in network protocols, security systems, and threat mitigation strategies.',
      ' Demonstrated a strong foundation in IT and network security, ready to contribute to cybersecurity initiatives.',
    ],
  },
  {
    title: 'Bachelor of IT',
    company_name: 'KOI',
    icon: koi,
    iconBg: '#E6DEDD',
    date: 'March 2021 - June 2023',
    points: [
      'Graduated from King&apos;s Own Institute with a Bachelor of IT in 2023, showcasing academic dedication.',
      'Proficient in Java, data structures, and algorithms, ensuring strong software development capabilities.',
      'Experienced in NetBeans project management, demonstrating efficient project planning and execution skills.',
      'Skilled in Human-Computer Interaction, facilitating user-centric design for enhanced user experiences.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company_name: 'Dented Code Academy ',
    icon: dentedCode,
    iconBg: '#E6DEDD',
    date: 'July 2023 - Oct 2023',
    points: [
      'Completed Dented Code Academy&apos;s Full Stack Development program, gaining hands-on experience in HTML, CSS, JavaScript, React, MongoDB, and Node.js.',
      ' Proficient in both frontend and backend technologies, showcasing versatility in web development.',
      ' Successfully created multiple projects, demonstrating practical application of acquired skills.',
      ' Job-ready graduate with a solid foundation in web development, prepared to contribute effectively in software development.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Sujan proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sujan does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Sujan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'AI Summariser',
    description:
      'Effortlessly summarize web content. Paste a link and receive concise insights instantly. Save time and stay informed with our AI summarizer.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ai_summariser,
    source_code_link: 'https://github.com/TipTopClone/ai-summariser',
    view_page_link: 'https://ai-summariser-theta.vercel.app/',
  },
  {
    name: 'Sujan Restaurant',
    description:
      'Designed responsive restaurant website, showcasing enticing menus, stunning visuals, seamless reservations, and engaging user experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: restaurant,
    source_code_link: 'https://github.com/TipTopClone/sujan-restaurant',
    view_page_link: 'https://sujan-restaurant.vercel.app/',
  },

  {
    name: 'Prank Calculator',
    description:
      'Discover endless fun with my React prank calculator – guess the right number and unlock hilarious surprises. Prepare for laughter!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: calculator,
    source_code_link: 'https://github.com/TipTopClone/React-calculator',
    view_page_link: 'https://react-calculator-one-tau.vercel.app/',
  },

  {
    name: 'Random User API',
    description:
      'Experience instant diversity with my React random user generator website. Create, explore, and meet virtual personalities with a click!',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie_list,
    source_code_link: 'https://github.com/TipTopClone/Random-user-API-Projects',
    view_page_link: 'https://random-user-api-projects.vercel.app/',
  },

  {
    name: 'Not-To-Do-List',
    description:
      'Elevate your productivity with my React not-to-do list. Stay focused, avoid distractions, and achieve your goals more efficiently than ever.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ntdl,
    source_code_link: 'https://github.com/TipTopClone/React-not-to-do-list',
    view_page_link: 'https://react-ntdl.vercel.app/',
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
