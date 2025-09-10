import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// Paginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Sobre from './routes/Sobre.jsx'
import PostDetail from './routes/PostDetail'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/New',
        element: <NewPost />
      },
      {
        path: '/Sobre',
        element: <Sobre />
      },
      { path: '/posts/:id',
        element: <PostDetail /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)