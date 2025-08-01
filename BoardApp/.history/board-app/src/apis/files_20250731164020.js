import axios from "axios";

// 다운로드
export const download = (id) => axios.get(`/filese/download/${id}`, {responseType:'blob'})

// 파일 삭제
export const remove = (id) => axios.delete(`/filse/${id}`)

// 파일 선택 삭제
export const removeFiles = ()

// 타입별 파일 목록