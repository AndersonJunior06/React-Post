import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-8">
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Anderson Junior</h3>
          <p className="text-gray-400 text-sm max-w-md">
            Um site de exemplo para consumo de API, feito com React e Tailwind.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Links úteis</h3>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/new" className="hover:text-white transition-colors duration-300">
                New Post
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-white transition-colors duration-300">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://github.com/AndersonJunior06" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={36} />
          </a>
          <a 
            href="https://www.linkedin.com/in/andersonjunior22/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={36} />
          </a>
          <a 
            href="https://andersonjunior-portifolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-300"
          >
            <FaGlobe size={36} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Copyright © 2025 by Anderson Junior | Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer
