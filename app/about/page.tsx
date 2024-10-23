import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/abdullah.png"
            alt="Your Name"
            width={300}
            height={300}
            className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-8"
          />
          <div className="max-w-lg">
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. 
              I love creating beautiful, responsive, and user-friendly websites that provide excellent user experiences.
            </p>
            <p className="text-lg mb-4">
              My journey in web development has enabled me to collaborate on exciting projects and continuously learn 
              new skills. I thrive on challenges and enjoy solving problems through code.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities like hiking and cycling.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
