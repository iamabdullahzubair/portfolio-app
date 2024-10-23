import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { Button } from '@/app/components/ui/button'
import { email, githubLink, instaLink, linkedInLink } from '../libs/constants'

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Get In Touch</h1>
        <div className="flex flex-col items-center space-y-6">
          <Button asChild variant="outline" size="lg">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaGithub className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaLinkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={instaLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaInstagram className="w-6 h-6 mr-2" />
              Instagram
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`mailto:${email} `} className="flex items-center">
              <FaEnvelope className="w-6 h-6 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}