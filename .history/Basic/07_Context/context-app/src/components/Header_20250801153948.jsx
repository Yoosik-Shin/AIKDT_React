import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Header.css'
import { LoginContext } from '../Contexts/LoginContextProvider';




const Header = () => {

  // 📦 LoginContext 가져오기
  // 🧊 isLogin
  // 🌞 logout
  const { isLogin, logout } = useContext(LoginContext)


  return (
      <header>
          <div className="logo">
              <Link to="/">
                  <img src="https://i.imgur.com/fzADqJo.png" alt="logo" className='logo' />
              </Link>
          </div>
          <div className="util">
              <ul>
                  {/* 로그인 여부(isLogin) */}
                  <>
                      <li><Link to="/login">로그인</Link></li>
                      <li><Link to="/join">회원가입</Link></li>
                      <li><Link to="/about">소개</Link></li>
                  </>
              </ul>
          </div>
      </header>
  )
}

export default Header