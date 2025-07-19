import React from 'react'
import './Navbar.css';

const navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <ul className='nav-menu'>
                <li className='text-white'>Features</li>
                <li className='text-white'>Developers</li>
                <li className='text-white'>Company</li>
                <li className='text-white'>Blog</li>
                <li className='text-white'>Changelog</li>
            </ul>
        </div>
    </div>
  )
}

export default navbar