import axios from 'axios';
axios.defaults.baseURL = "/boards"


// 목록
export const list = (page, size) => axios.get(`?page=${page}&size=${size}`)

// 조회
export const select = (id) => axios.get(`/${id}`)

// 등록
export const select = (id) => axios.get(`/${id}`)

// 수정
// 삭제