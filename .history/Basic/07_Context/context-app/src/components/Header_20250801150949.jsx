import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/">
                <img src="" alt="logo" className='logo' />
            </Link>
        </div>
    </header>
  )
}

export default Header