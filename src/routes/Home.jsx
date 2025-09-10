import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteFetch from '../axios/config'


const Home = () => {
  const [posts, setPosts] = useState([])

  const getPost = async () => {
    try {
      const resposta = await SiteFetch.get('/posts')
      setPosts(resposta.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className='max-w-3xl mx-auto my-8 px-4'>
      <h1 className='text-3xl font-bold mb-6 text-white'>Últimos Posts</h1>

      {posts.length === 0 ? (
        <p className='text-gray-400'>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className='bg-gray-800 p-4 rounded-md mb-4 shadow-md'
          >
            <h2 className='text-xl font-semibold text-white'>{post.title}</h2>
            <p className='text-gray-300'>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors duration-300'>
            Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
