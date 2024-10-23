import Link from 'next/link'
import Image from 'next/image'
import { FaChevronDown, } from 'react-icons/fa'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { about_me, experience_year, my_name, skills } from './libs/constants'
import { MdOutlineDownload } from 'react-icons/md'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <section className="pt-20 pb-32 px-4 text-center">
        <Image
          src="/abdullah.png"
          alt={my_name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Mohd Abdullah</h1>
        <p className="text-xl mb-8 text-gray-600">Full Stack Web Developer & Software Engineer</p>
        <div className="flex justify-center sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0">

          <Link className='bg-black px-4 py-2 rounded text-white' href="/projects">View My Work</Link>
          <Link className='border border-black rounded px-4 py-2' href="/contact">Get in Touch</Link>
          <a
            className='border border-black rounded px-4 py-2 flex gap-2 justify-center items-center'
            href="/AbdullahResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineDownload />
            <p>Resume</p>
          </a>
        </div>
      </section>
      <div className="text-center py-8">
        <FaChevronDown className="animate-bounce w-8 h-8 text-gray-400 mx-auto" />
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            {about_me}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <Card key={skill.name}>
                <CardHeader className="flex flex-row items-center justify-center space-x-2">
                  <skill.icon className="w-8 h-8 text-blue-500" />
                  <CardTitle className='hidden sm:block'>{skill.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{experience_year}+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Extensive experience in developing and deploying web applications for various industries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>20+ Successful Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Delivered numerous projects on time and within budget, ensuring client satisfaction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Continuous Learner</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Always staying updated with the latest technologies and best practices in web development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start a project?</h2>
          <p className="text-xl mb-8 text-gray-600">Let's create something amazing together!</p>

          <Link className='px-4 py-2 bg-black text-white rounded' href="/contact">Contact Me</Link>

        </div>
      </section>

      
    </div>
  )
}