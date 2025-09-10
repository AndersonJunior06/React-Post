import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiReactrouter } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const Sobre = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Projeto</h1>

      <p className="text-gray-300 mb-6 leading-relaxed text-lg text-center">
        Este projeto foi desenvolvido como exemplo de consumo de API utilizando 
        <span className="text-blue-400 font-semibold"> React</span>, 
        <span className="text-blue-400 font-semibold"> Tailwind</span>, 
        <span className="text-blue-400 font-semibold"> React Router</span> e a API pública 
        <a 
          href="https://jsonplaceholder.typicode.com/guide/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline ml-1"
        >
          JSONPlaceholder
        </a>.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ferramentas Utilizadas</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaReact className="text-blue-400 text-2xl" /> React
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss className="text-cyan-400 text-2xl" /> Tailwind
            </li>
            <li className="flex items-center gap-2">
              <SiReactrouter className="text-red-500 text-2xl" /> React Router
            </li>
            <li className="flex items-center gap-2">
              <TbApi className="text-yellow-400 text-2xl" /> API JSONPlaceholder
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sobre a API</h2>
          <p className="text-gray-300 mb-4">
            O <span className="font-semibold">JSONPlaceholder</span> é uma API gratuita para testes e prototipação. 
            Ela fornece dados fictícios como posts, comentários, usuários e muito mais.
          </p>
          <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Acessar API
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sobre
