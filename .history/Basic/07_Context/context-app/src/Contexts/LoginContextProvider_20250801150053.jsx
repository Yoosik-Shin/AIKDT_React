import React, { useEffect } from 'react'


// 📦 컨텍스트 생성
export const LoginCOntext = createContext()



const LoginContextProvider = ({children}) => {

    // 🔐 로그인 여부
    const [isLogin, setIsLogin] = useState(false)

    // 로그아웃 함수
    const logout = () => {
        setIsLogin(false)
    }

    // 임의로, 마운트 후 3초 뒤 로그인 되도록
    useEffect(() => {
        setTimeout(() => {
            setIsLogin(true)
        }, 3000)
    }, [])

  return (
    <div>LoginContextProvider</div>
  )
}

export default LoginContextProvider