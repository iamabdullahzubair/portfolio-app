'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projectsData = {
  'ecommerce-app': {
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
    links: {
      demo: '#',
      github: '#',
    },
  },
  'school-management': {
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
    links: {
      github: '#',
    },
  },
  'youtube-clone': {
    title: 'YouTube Clone',
    status: 'Completed',
    description: 'Video streaming platform with authentication, uploads, and community features.',
    fullDescription:
      'A fully functional YouTube clone demonstrating advanced video streaming and community engagement features. This project implements a complete video platform where users can upload, stream, discover, and interact with video content. It showcases expertise in handling large file uploads, video processing, and real-time interactions.',
    detailedDescription: `
      This YouTube Clone is a comprehensive video streaming platform built to replicate YouTube\'s core functionality while demonstrating advanced full-stack development capabilities. The platform handles the complete lifecycle of video content from upload to streaming and community interaction.

      User authentication is implemented using JWT tokens, providing secure and stateless authentication that scales well. Users can create accounts, manage their channels, and access personalized content recommendations based on their viewing history and preferences.

      The video upload system is robust and user-friendly. Users can upload videos of various formats and sizes, add titles, descriptions, tags, and thumbnails. The backend processes uploaded videos, converting them to multiple quality formats (480p, 720p, 1080p) to optimize bandwidth usage and provide smooth playback across different network conditions.

      The discovery system includes a comprehensive search functionality with autocomplete suggestions, trending videos, and category-based browsing. Users can subscribe to channels, create playlists, and organize their favorite videos. The recommendation engine analyzes viewing patterns and suggests relevant content.

      Community engagement features include the ability to like/unlike videos, leave comments on videos, and reply to comments. All interactions are stored in MongoDB and displayed in real-time, creating an interactive viewing experience. Users can view detailed video statistics including view count, like ratio, and comment history.

      The frontend uses React for a smooth, responsive user interface with Tailwind CSS for modern styling. The backend is built with Node.js and Express, implementing efficient APIs for all operations. The entire system is designed to handle concurrent users and high traffic loads.
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
    links: {
      github: '#',
    },
  },
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-foreground/60 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <ArrowLeft size={20} />
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/10 to-transparent border-b border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-foreground/70">{project.fullDescription}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Detailed Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">About This Project</h2>
          <div className="bg-card rounded-xl border border-border p-8 space-y-4">
            {project.detailedDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 leading-relaxed text-base">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-gradient-to-br from-primary/15 to-accent/15 text-foreground rounded-lg border border-primary/25 font-semibold text-center hover:border-primary/50 hover:shadow-md transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <span className="text-accent font-bold text-2xl mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-foreground/85 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Project Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Project Links</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all font-bold text-lg"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all font-bold text-lg"
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
