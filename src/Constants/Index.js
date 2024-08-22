import {
  jamuna,
  prem,
  asim,
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
  Rebbtech,
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
  library,
  transaction,
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
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'React  Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Analyst',
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
    title: 'Data Analyst/ IT support ',
    company_name: 'JB Metro Distributor Canberra',
    icon: JBMetro,
    iconBg: '#E6DEDD',
    date: 'Aug 2024 - Present',
    points: [
      'Efficiently mapped products and customers using Excel, improving data accuracy and organization within the company.',
      'Automated repetitive data analysis tasks with Python, boosting productivity and reducing manual workload.',
      'Provided prompt IT support, minimizing system downtime and ensuring smooth daily operations for all staff.',
      'Created detailed Excel reports, enabling better data-driven decisions and improving visibility into key business metrics.',
      'Streamlined data handling and IT processes, enhancing overall workflow efficiency and reducing process bottlenecks.',
    ],
  },
  {
    title: 'Intern as Junior Software Developer',
    company_name: 'REBB TECH PTY LTD',
    icon: Rebbtech,
    iconBg: '#383E56',
    date: 'Jan 2024 - March 2024',
    points: [
      'Developed and deployed scalable MERN stack applications, contributing to the enhancement of company web solutions.',
      'Collaborated with cross-functional teams to successfully deliver high-quality software projects within specified timelines.',
      'Played a pivotal role in all stages of the full-stack development lifecycle, ensuring efficient coding, testing, and deployment processes.',
      'Addressed technical challenges, optimized application performance, and maintained high standards of code quality.',
    ],
  },

  {
    title: 'Manager',
    company_name: 'Coles Group',
    icon: coles,
    iconBg: '#383E56',
    date: 'March 2019 - Jan 2020',
    points: [
      ' Led and managed a team in a high-pressure retail environment, demonstrating strong leadership and organizational skills.',
      ' Executed efficient inventory management and streamlined supply chain operations, showcasing process optimization abilities.',
      'Prioritized customer satisfaction and maintained strong communication skills, skills transferrable to IT project management.',
      'Oversaw operational budgets, financial forecasting, and cost control, highlighting financial acumen applicable to IT budgeting.',
    ],
  },
];

const education = [
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
];

const testimonials = [
  {
    testimonial:
      'Sujan Mahat at Coles: Exceptional, dedicated, and a valuable team member.',
    name: 'Jamuna Karki',
    designation: 'Friend',
    company: 'Coles Group',
    image: jamuna,
  },
  {
    testimonial:
      'Sujan displayed remarkable dedication and growth throughout our software journey.',
    name: 'Prem Acharya',
    designation: 'Founder',
    company: 'Dented Code',
    image: prem,
  },
  {
    testimonial:
      "Sujan excels: dedicated, skilled, collaborative—integral to JB Metro's success.",
    name: 'Asim Shrestha',
    designation: 'Collegue',
    company: 'JB Metro',
    image: asim,
  },
];

const projects = [
  {
    name: 'Library Management',
    description:
      'Dynamic library website enabling book purchases and browsing for an immersive reading experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: library,
    source_code_link:
      'https://github.com/TipTopClone/Sujan-s-library-client-v2',
    view_page_link: 'https://sujan-s-library-client-v2.vercel.app/',
  },

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
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: ai_summariser,
    source_code_link: 'https://github.com/TipTopClone/ai-summariser',
    view_page_link: 'https://ai-summariser-theta.vercel.app/',
  },
  {
    name: 'Transaction History',
    description:
      'Designed and developed a dynamic full-stack website for managing personal finances, featuring seamless income and expense tracking with interactive transaction history.',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDb',
        color: 'pink-text-gradient',
      },
    ],
    image: transaction,
    source_code_link: 'https://github.com/TipTopClone/Transaction-Client',
    view_page_link: 'https://transaction-client-mu.vercel.app/',
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
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDb',
        color: 'pink-text-gradient',
      },
    ],
    image: ntdl,
    source_code_link: 'https://github.com/TipTopClone/fullstack-ntdl',
    view_page_link: 'https://ntdl-fullstack-7e27.onrender.com/',
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
