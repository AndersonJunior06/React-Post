import React, { useState } from 'react'
import SiteFetch from '../axios/config'
import { useNavigate } from 'react-router-dom'
import Notify from '../components/Notify'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [notify, setNotify] = useState(null)

  const createPost = async (e) => {
    e.preventDefault()

    const post = { title, body, userId: 1 }
    try {
      const resposta = await SiteFetch.post('/posts', post)
      setNotify({ message: 'Post criado com sucesso!', type: 'success' })

      console.log('Post criado:', resposta.data)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      setNotify({ message: 'Erro ao criar post!', type: 'error' })
      console.error('Erro ao criar post:', error)
    }
  }

  return (
    <div className='max-w-3xl mx-auto my-8 p-6 bg-gray-800 rounded-lg shadow-md text-white'>
      <h2 className='text-2xl font-bold mb-6'>Inserir novo Post:</h2>

      <form onSubmit={createPost} className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='title' className='mb-2 font-semibold'>
            Título
          </label>
          <input
            type='text'
            name='title'
            placeholder='Digite o título'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='body' className='mb-2 font-semibold'>
            Conteúdo
          </label>
          <textarea
            name='body'
            placeholder='Digite o conteúdo'
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className='p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <input
          type='submit'
          value='Criar post'
          className='w-full py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md font-semibold cursor-pointer'
        />
      </form>

      {notify && (
        <Notify
          message={notify.message}
          type={notify.type}
          onClose={() => setNotify(null)}
        />
      )}
    </div>
  )
}

export default NewPost
