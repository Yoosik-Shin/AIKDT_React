import React from 'react'


// 📦 컨텍스트 생성
export const LoginCOntext = createContext()



const LoginContextProvider = ({children}) => {

    // 🔐 로그인 여부
    const [isLogin, setIsLogin] = useState(false)

    // 로그아웃 함수
    const logout = () => {
        
    }

  return (
    <div>LoginContextProvider</div>
  )
}

export default LoginContextProvider