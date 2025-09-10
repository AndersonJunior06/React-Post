import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-4 px-8 bg-gray-800 text-white'>
        <h2 className='opacity-100'>
            <Link to={'/'} className='opacity-100 hover:opacity-100 transition-opacity duration-300'>React + Axios + React-Router</Link>
        </h2>
        <ul className='flex gap-4'>
            <li>
                <Link to={'/'} className='opacity-70 hover:opacity-100 transition-opacity duration-300'>Home</Link>
            </li>
            <li>
                <Link to={'/New'} className='opacity-70 hover:opacity-100 transition-opacity duration-300'>New Post</Link>
            </li>
            <li>
                <Link to={'/Sobre'} className='opacity-70 hover:opacity-100 transition-opacity duration-300'>Sobre</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar