import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 프록시 설정
    proxy: {
      '/' : {
        target: 'http://localhost:8080',  // (port) 서버 주소
        changeOrigin: true,               // 요청 헤더의 Host도 변경
        secure: false,                    // https 지원 여부
        // rewrite: (path) => path.replace(/^\//, '')
      }
    }
  }
})
