import axios from "axios";

// 다운로드
export const download = (id) => axios.get(`/filese/download/${id}`, {responseType})


// 파일 삭제

// 파일 선택 삭제

// 타입별 파일 목록