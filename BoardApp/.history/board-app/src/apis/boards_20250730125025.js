import axios from 'axios';
axios.defaults.baseURL = "/boards"


// 목록
export const list = (page, size) => axios.get(`?page=${page}&size=${size}`)

// 조회
export const select = (id) => axios.get(`/${size}`)

// 등록
// 수정
// 삭제