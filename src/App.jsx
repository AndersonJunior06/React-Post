import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <NavBar />
      <div className='max-w-[1000px] mx-auto my-8 px-8'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

