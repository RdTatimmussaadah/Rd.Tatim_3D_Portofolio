export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'ATM Program',
      desc: 'A basic C++ project simulating an ATM system',
      subdesc:
        'Built using C++, this project simulates essential ATM functionalities such as balance inquiry, cash withdrawal, deposit, and fund transfer.',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Advanced C++ Project: Craps Game Simulation',
      desc: 'A C++ program simulating the Craps gambling game to demonstrate how casino games are strategically designed.',
      subdesc:
        'This project aims to educate users on the mechanics behind gambling by revealing how probabilities and house advantages are set up in casino games. Built using C++, it accurately simulates the Craps game, allowing players to analyze betting odds and understand why the house always wins in the long run.',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Electronics Project: Fire Detection System',
      desc: 'A fire detection system built using electronic circuits to enhance safety and early fire prevention.',
      subdesc:
        'This project utilizes sensors and microcontrollers to detect fire hazards by monitoring temperature and smoke levels. Designed with efficiency in mind, it provides real-time alerts, ensuring timely responses to potential fire incidents.',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Computer-Based System Project: Automatic Waste Segregation Bin',
      desc: 'An intelligent waste segregation system using an ATmega328 microcontroller, Arduino, moisture and ultrasonic sensors, servo actuators, and an LCD display.',
      subdesc:
        'This project automates waste classification by detecting material properties using sensors and sorting waste accordingly. Designed for efficiency and sustainability, it enhances waste management by reducing human effort and ensuring proper recycling processes.',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Algorithm & Data Structure Project: Mini MBTI Test Game',
      desc: 'A unique MBTI personality test game built using RenPy, featuring tree-based algorithms, interactive mini-games, adorable visuals, fun audio effects, and engaging animations.',
      subdesc:
        'Designed to make personality testing more enjoyable, this game utilizes decision trees to determine MBTI types while incorporating entertaining mini-games and vibrant aesthetics. With its charming animations and playful sound effects, it offers a delightful and interactive experience for users.',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.4 : isMobile ? 0.5 : 0.65,
      deskPosition: isMobile ? [-0.3, -3, 0] : [-0.15, -4.2, 0],
      cubePosition: isSmall ? [-5, 1, 0] : isMobile ? [-8, 1, 0] : isTablet ? [-9, 1, 0] : [-10, 1, 0],
      reactLogoPosition: isSmall ? [4, 1, 0] : isMobile ? [8, 1, 0] : isTablet ? [9, 1, 0] : [10, 1, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };