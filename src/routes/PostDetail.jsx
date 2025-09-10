import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SiteFetch from '../axios/config'

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const resposta = await SiteFetch.get(`/posts/${id}`)
        setPost(resposta.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [id])

  if (!post) return <p className="text-gray-400 text-center mt-20">Carregando...</p>

  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{post.title}</h1>
        <p className="text-gray-300 mb-8 text-lg md:text-xl">{post.body}</p>

        <div className="text-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
