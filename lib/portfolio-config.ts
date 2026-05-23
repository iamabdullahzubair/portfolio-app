export const portfolioConfig = {
  personal: {
    name: 'Mohd Abdullah',
    title: 'Full Stack Engineer',
    company: 'Baar Technologies',
    location: 'Saltlake Sector V, Kolkata',
    bio: 'Building scalable backend systems, secure APIs, and modern web applications using Node.js, TypeScript, React, and PostgreSQL. Currently working on enterprise IAM systems at Baar Technologies.', cta: {
      primary: 'View Projects',
      secondary: 'Download Resume',
    },
  },

  experience: [
    {
      role: 'Full Stack Developer (IAM Systems)',
      company: 'Baar Technologies',
      location: 'Saltlake Sector V, Kolkata',
      period: 'Jan 2025 - Present',
      description:
        'Developing enterprise Identity & Access Management (IAM) systems focused on authentication, authorization, user lifecycle management, and secure API development. Working on scalable frontend and backend modules using React, Node.js, TypeScript, and MSSQL.', highlights: ['React', 'Node.js', 'Express', 'MSSQL', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'IAM Systems'],
      achievements: [
        'Built secure authentication and authorization workflows',
        'Developed scalable APIs for user and identity lifecycle management',
        'Worked on enterprise-grade IAM modules',
      ]
    },
  ],

  skills: [
    {
      title: 'Backend Engineering',
      skills: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'REST APIs',
        'Authentication',
        'Authorization',
        'RBAC',
        'GraphQL',
        'Redis',
      ],
    },

    {
      title: 'Frontend Engineering',
      skills: [
        'React',
        'Next.js',
        'Redux Toolkit',
        'Tailwind CSS',
        'Ant Design',
        'JavaScript',
      ],
    },

    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MSSQL',
        'MongoDB',
        'Database Design',
        'Query Optimization',
      ],
    },

    {
      title: 'System Design',
      skills: [
        'Caching',
        'Load Balancing',
        'Rate Limiting',
        'Scalability Basics',
        'Multi-tenant Architecture',
      ],
    },

    {
      title: 'DevOps & Tools',
      skills: [
        'Docker',
        'Nginx',
        'Linux',
        'Git',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'Om Dayal Group of Institutions',
      details: 'Uluberia, Howrah West Bengal',
      affiliation: 'Maulana Abul Kalam Azad University of Technology',
      year: '2024',
      cgpa: '8.2',
      highlights: ['Data Structures', 'Algorithms', 'Web Development', 'Database Management', 'Software Engineering'],
    },
    {
      degree: 'Class XII (Higher Secondary)',
      field: 'CBSE',
      institution: 'Children Senior Secondary School',
      details: 'Azamgarh Uttar Pradesh',
      year: '2019',
      percentage: '72%',
      highlights: ['Physics', 'Chemistry', 'Mathematics'],
    },
    {
      degree: 'Class X (Secondary)',
      field: 'CBSE',
      institution: 'Children Senior Secondary School',
      details: 'Azamgarh Uttar Pradesh',
      year: '2017',
      cgpa: '9.2',
      highlights: ['Strong academic foundation', 'Well-rounded education'],
    },
  ],

  learning: [
    {
      title: 'Data Structures & Algorithms',
      icon: '🧬',
      description: 'Mastering fundamental algorithms and optimized data structures for problem-solving',
      topics: [
        'Array & String Algorithms',
        'Linked Lists & Trees',
        'Graph Algorithms',
        'Dynamic Programming',
        'Sorting & Searching',
        'Time & Space Complexity',
      ],
    },
    {
      title: 'System Design',
      icon: '🏗️',
      description: 'Exploring scalable distributed systems, backend architecture, caching, load balancing, and high-availability design patterns.',
      topics: [
        'Distributed Systems',
        'Caching',
        'Message Queues',
        'Load Balancing',
        'Database Scaling',
        'API Gateway',
      ]
    },
  ],

  projects: [
    {
      id: 'school-management',
      title: 'School Management System',
      status: 'In Progress',
      description: 'Multi-tenant system with role-based access control and academic management.',
      fullDescription:
        'A sophisticated school management system designed for institutional efficiency and streamlined operations. This multi-tenant application serves multiple schools simultaneously while maintaining complete data isolation. It implements comprehensive role-based access control ensuring teachers, students, parents, and administrators have appropriate access to relevant information.',
      detailedDescription: `
        This School Management System is being developed as an enterprise-grade solution for educational institutions. The system is built on a multi-tenant architecture, allowing multiple schools to operate independently within the same application while maintaining complete data privacy and security.

        The core functionality includes academic year management where administrators can configure school calendars, define academic terms, and manage holiday schedules. Class management allows for easy organization of students into sections with assignment of class teachers and subjects. Student information is centralized with personal details, academic records, and parent contact information all in one place.

        The attendance tracking system provides real-time monitoring of student presence, enabling teachers to mark attendance efficiently and parents to monitor their child's attendance patterns. The system generates automated reports and alerts parents about excessive absences.

        Role-based access control (RBAC) is at the heart of this system. Administrators have full control, teachers can manage their classes and students, students can view their grades and assignments, and parents can monitor their child's academic progress. Each role has specific permissions for accessing, creating, and modifying data.

        The permission-based resource access ensures that sensitive information is protected. For example, a teacher can only see students in their assigned classes, and students can only view their own grades. The system uses TypeScript for type safety and MongoDB for flexible data storage with Express.js for robust API development.
      `,
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'TypeScript', 'JWT Auth', 'Tailwind'],
      keyFeatures: [
        'Multi-tenant architecture with data isolation',
        'Comprehensive role-based access control',
        'Academic calendar and term management',
        'Class and section organization',
        'Student information management',
        'Attendance tracking system',
        'Grade management and reporting',
        'Parent-teacher communication',
        'Permission-based resource access',
        'Real-time notifications',
      ],
      engineeringHighlights: [
        'Multi-tenant architecture',
        'Role-based access control (RBAC)',
        'Permission-based resource management',
        'Academic year isolation',
        'Scalable modular backend design',
      ],
      links: {
        github: '#',
      },
    },
    {
      id: 'ecommerce-app',
      title: 'E-commerce Application',
      status: 'Featured',
      description: 'Full-featured platform with product listing, cart, and secure Razorpay payments.',
      fullDescription:
        'A comprehensive e-commerce platform built from scratch to demonstrate full-stack development capabilities. This project encompasses the entire customer journey from product discovery to successful payment processing. The application provides a seamless shopping experience with advanced product filtering, real-time cart management, and secure payment processing.',
      detailedDescription: `
        I built this e-commerce platform as a complete full-stack application showcasing modern web development practices. The platform allows customers to browse through a diverse product catalog with advanced filtering options including price range, categories, ratings, and availability. Each product displays detailed information with high-quality images, customer reviews, and inventory status.

        The shopping cart system uses Redux Toolkit for state management, ensuring smooth real-time updates across the application. Users can add items to their wishlist for future reference, apply discount codes, and manage their cart with ease. The checkout process is intuitive and streamlined, collecting necessary shipping and billing information.

        Payment processing is handled securely through Razorpay integration, supporting multiple payment methods including cards, wallets, and UPI. The application maintains order history, allowing users to track their purchases and view detailed receipts. Authentication is managed through Firebase, providing secure and reliable user account management with email verification.

        The frontend is built with React and uses Tailwind CSS for responsive, modern styling that works flawlessly on mobile, tablet, and desktop devices. The backend architecture is scalable and can handle high traffic loads with proper database indexing and caching strategies.
      `,
      techStack: ['React', 'Redux', 'Firebase', 'Razorpay', 'Tailwind', 'REST APIs', 'JavaScript'],
      keyFeatures: [
        'Advanced product filtering and search',
        'Shopping cart with persistent storage',
        'Wishlist management system',
        'Secure Razorpay payment integration',
        'Order tracking and history',
        'User authentication with Firebase',
        'Responsive design for all devices',
        'Real-time inventory updates',
      ],
      engineeringHighlights: [
        'Secure payment workflow integration',
        'Global state management using Redux Toolkit',
        'Firebase authentication & authorization',
        'Responsive architecture for multiple devices',
      ],
      links: {
        demo: '#',
        github: 'https://github.com/iamabdullahzubair/ecommerce-firebase',
      },
    },

  ],

  about: {
    title: 'About Me',
    description: 'I’m a Full Stack Engineer passionate about backend architecture, scalable systems, and modern web technologies. I enjoy building production-ready applications, designing secure APIs, and exploring system design concepts.',
    stats: [
      { label: 'Years of Experience', value: '1.5+' },
      { label: 'Projects Built', value: '10+' },
    ],
  },

  contact: {
    title: 'Get In Touch',
    description:
      'Open to software engineering opportunities, collaborations, and meaningful tech discussions.',
    email: 'iamabdullahzubair@gmail.com',
    links: [
      {
        label: 'Email',
        url: 'mailto:iamabdullahzubair@gmail.com',
        icon: '✉️',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mohd-abdullah-zubair',
        icon: '💼',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/iamabdullahzubair',
        icon: '🐙',
      },
    ],
  },
};
