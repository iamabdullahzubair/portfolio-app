import { PortfolioData } from './types';
import { calculateExperience } from './utils';

export const defaultPortfolioData: PortfolioData = {
  personal: {
    name: 'Mohd Abdullah',
    title: 'Product Engineer',
    company: 'Baar Technologies',
    location: 'Saltlake Sector V, Kolkata',
    bio: 'Product Engineer at Baar Technologies specializing in enterprise IAM, SCIM 2.0 user provisioning, SAML/AD authentication, and real-time backend systems. Architecting secure APIs, background task queues, and WebSockets using Node.js, TypeScript, React, and MSSQL.',
    resumeUrl: '/resume.pdf',
    avatarUrl: '/apple-touch-icon.png',
    careerStartDate: '2025-01-02',
    cta: {
      primary: 'View Projects',
      secondary: 'Download Resume',
    },
  },

  about: {
    title: 'About Me',
    description: 'I’m a Product Engineer at Baar Technologies with deep expertise in enterprise Identity & Access Management (IAM), real-time architectures, and secure distributed backend systems.',
    paragraphs: [
      "I started my engineering journey at Baar Technologies as a Full Stack Engineer and rapidly grew into a Product Engineer driving core IAM platform capabilities. My day-to-day focus centers around mission-critical identity infrastructure — including SCIM 2.0 automated provisioning, asynchronous background worker pipelines, and real-time WebSocket synchronization.",
      "I have extensive hands-on experience designing enterprise authentication and authorization systems: implementing SAML 2.0 Single Sign-On (SSO), Active Directory (AD) integration, Multi-Factor Authentication (MFA), and granular RBAC policies. On the data tier, I architect resilient schemas and high-throughput queries across MSSQL, PostgreSQL, and MongoDB.",
      "I combine a product-driven mindset with backend rigor — writing clean, production-resilient TypeScript and Node.js code, optimizing background job processing, and containerizing microservices with Docker and Nginx for seamless enterprise deployments.",
    ],
    stats: [
      { label: 'Years of Experience', value: calculateExperience('2025-01-02') },
      { label: 'Projects Built', value: '10+' },
    ],
  },

  experience: [
    {
      id: 'baar-technologies',
      role: 'Product Engineer (ex-Full Stack Engineer)',
      company: 'Baar Technologies',
      location: 'Saltlake Sector V, Kolkata',
      period: 'Jan 2025 - Present',
      description:
        'Developing enterprise-grade Identity and Access Management (IAM) solutions focused on authentication, authorization, user lifecycle management, and SCIM-based user provisioning. Building scalable frontend and backend modules using React, Node.js, TypeScript, and MSSQL, with hands-on experience in WebSockets, background jobs, asynchronous task processing, and secure API development.',
      highlights: [
        'SCIM 2.0',
        'SAML 2.0 SSO',
        'Active Directory (AD)',
        'MFA / 2FA',
        'WebSockets',
        'Background Jobs',
        'Node.js',
        'TypeScript',
        'React',
        'MSSQL',
        'Docker',
        'IAM Systems',
      ],
      achievements: [
        'Architected SCIM 2.0 REST APIs and automated background worker queues for scalable user provisioning and de-provisioning',
        'Engineered enterprise authentication workflows including SAML 2.0 SSO, Active Directory (AD) integration, and Multi-Factor Authentication (MFA)',
        'Implemented bi-directional WebSocket infrastructure for live event broadcasting, status notifications, and real-time dashboard updates',
        'Joined as Full Stack Engineer and promoted to Product Engineer, driving key IAM modules across frontend (React/AntD) and backend (Node/MSSQL)',
      ],
    },
  ],

  skills: [
    {
      title: 'Enterprise IAM & Security',
      skills: [
        'SCIM 2.0 Provisioning',
        'SAML 2.0 SSO',
        'Active Directory (AD Auth)',
        'MFA / 2FA Verification',
        'RBAC & ABAC Policies',
        'OAuth 2.0 & OIDC',
        'JWT & Session Security',
        'User Lifecycle Management',
      ],
    },
    {
      title: 'Backend & Systems',
      skills: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'WebSockets (Socket.IO)',
        'Background Jobs & Queues',
        'Asynchronous Task Processing',
        'REST APIs',
        'Redis Caching',
      ],
    },
    {
      title: 'Frontend Engineering',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Redux Toolkit',
        'Tailwind CSS',
        'Ant Design',
        'Real-time UI Sync',
        'JavaScript (ES6+)',
      ],
    },
    {
      title: 'Databases & Storage',
      skills: [
        'MSSQL',
        'PostgreSQL',
        'MongoDB',
        'Database Schema Design',
        'Query Optimization',
        'Drizzle ORM',
        'Transactions & Locking',
      ],
    },
    {
      title: 'DevOps & Architecture',
      skills: [
        'Docker',
        'Docker Compose',
        'Nginx Reverse Proxy',
        'Event-Driven Architecture',
        'Idempotent API Design',
        'Git & CI/CD Basics',
        'Linux',
      ],
    },
  ],

  projects: [
    {
      id: 'omnidesk',
      title: 'OmniDesk - Real-Time Support Platform',
      status: 'Featured',
      description: 'High-concurrency customer support platform with WebSocket synchronization, atomic ticket claiming, and PostgreSQL.',
      fullDescription:
        'A high-performance, full-stack real-time customer support platform built to handle concurrent interactions between customers and agents with zero race conditions. Engineered with strict database transactional guarantees, multi-tab presence tracking, and containerized deployment with Docker and Nginx.',
      detailedDescription: `
        OmniDesk is an enterprise-grade real-time customer support engine architected around high concurrency, reliable WebSocket synchronization, and strict database transactional integrity. The platform features isolated workflows for both self-service customers and technical support agents.

        To solve race conditions in multi-agent environments where multiple agents attempt to claim the same ticket simultaneously, OmniDesk implements atomic conditional update queries with PostgreSQL row-level write locks (SELECT ... UPDATE WHERE assigned_agent_id IS NULL RETURNING *), guaranteeing that exactly one claim transaction succeeds and all competing requests fail immediately with 409 Conflict without relying on leaky application-level checks.

        For resilient message delivery over unstable network connections, OmniDesk enforces idempotency via client-generated UUIDs and a composite unique constraint on (sender_id, client_message_id). Socket.IO broadcasts are strictly isolated behind database transaction commits to eliminate "ghost messages" on failure.

        The system also includes a multi-tab reference-counted in-memory presence registry (tracking transitions only on 0->1 and 1->0 connections) and end-to-end message lifecycle states (Sent, Delivered acknowledgment, and Read receipts). The entire stack is containerized with Docker, Docker Compose, and Nginx reverse proxy for production-grade deployment.
      `,
      techStack: [
        'React',
        'Node.js',
        'Express',
        'Socket.IO',
        'PostgreSQL',
        'Drizzle ORM',
        'Docker',
        'Nginx',
        'Vitest',
        'Zod',
      ],
      keyFeatures: [
        'Atomic queue claiming with PostgreSQL row-level locks (zero race conditions)',
        'Idempotent message delivery with client-generated UUIDs',
        'Persistence-first broadcast guarantee preventing ghost messages',
        'Multi-tab presence registry with reference-counted socket tracking',
        'Three-tier message lifecycle receipts (Sent, Delivered, Read)',
        'Role-based access control (Customers vs. Support Agents)',
        'Live typing indicators and bidirectional WebSocket synchronization',
        'Complete Docker Compose orchestration with automated health checks',
      ],
      engineeringHighlights: [
        'Atomic conditional update locking for race-free ticket claims',
        'PostgreSQL transaction-commit-first broadcast architecture',
        'Composite unique constraints preventing network retry duplicates',
        'In-memory reference counted presence tracking across browser tabs',
      ],
      links: {
        demo: '#',
        github: 'https://github.com/iamabdullahzubair/omnidesk',
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
      techStack: ['React', 'Redux Toolkit', 'Firebase', 'Razorpay', 'Tailwind CSS', 'REST APIs', 'JavaScript'],
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
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'TypeScript', 'JWT Authentication', 'Tailwind CSS'],
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
      id: 'youtube-clone',
      title: 'YouTube Clone Platform',
      status: 'Completed',
      description: 'Video streaming platform with authentication, uploads, and community features.',
      fullDescription:
        'A fully functional YouTube clone demonstrating advanced video streaming and community engagement features. This project implements a complete video platform where users can upload, stream, discover, and interact with video content. It showcases expertise in handling large file uploads, video processing, and real-time interactions.',
      detailedDescription: `
        This YouTube Clone is a comprehensive video streaming platform built to replicate core video platform functionality while demonstrating advanced full-stack development capabilities. The platform handles the complete lifecycle of video content from upload to streaming and community interaction.

        User authentication is implemented using JWT tokens, providing secure and stateless authentication that scales well. Users can create accounts, manage their channels, and access personalized content recommendations based on their viewing history and preferences.

        The video upload system is robust and user-friendly. Users can upload videos of various formats and sizes, add titles, descriptions, tags, and thumbnails. The backend processes uploaded videos, converting them to multiple quality formats to optimize bandwidth usage and provide smooth playback across different network conditions.

        The discovery system includes a comprehensive search functionality with autocomplete suggestions, trending videos, and category-based browsing. Users can subscribe to channels, create playlists, and organize their favorite videos. The recommendation engine analyzes viewing patterns and suggests relevant content.

        Community engagement features include the ability to like/unlike videos, leave comments on videos, and reply to comments. All interactions are stored in MongoDB and displayed in real-time, creating an interactive viewing experience. Users can view detailed video statistics including view count, like ratio, and comment history.
      `,
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'FFmpeg', 'Tailwind CSS'],
      keyFeatures: [
        'User authentication with JWT',
        'Video upload and processing',
        'Multi-quality video streaming',
        'Search and discovery system',
        'Channel subscriptions',
        'Like and comment system',
        'Playlist creation',
        'Video recommendations',
        'Trending videos',
        'User history and preferences',
      ],
      engineeringHighlights: [
        'Custom video streaming pipeline',
        'Real-time interaction architecture',
        'Secure token-based auth flow',
        'Scalable MongoDB schemas for videos & comments',
      ],
      links: {
        github: '#',
      },
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
        'Caching & Redis',
        'Message Queues',
        'Load Balancing',
        'Database Scaling & Indexing',
        'API Gateway & Microservices',
      ],
    },
  ],

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
    quickFacts: [
      { label: 'Location', value: 'Kolkata, India' },
      { label: 'Current Role', value: 'Full Stack Developer @ Baar Technologies', highlight: true },
      { label: 'Availability', value: 'Open to freelance & collaboration' },
      { label: 'Timezone', value: 'IST (Indian Standard Time)' },
    ],
  },
};

export const portfolioConfig = defaultPortfolioData;
