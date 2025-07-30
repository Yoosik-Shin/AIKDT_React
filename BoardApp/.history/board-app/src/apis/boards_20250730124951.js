import axios from 'axios';
axios.defaults.baseURL = "/boards"


// 목록
export const list = (page, size) => axios.get(`?page=`)

// 조회
// 등록
// 수정
// 삭제