import React, { useEffect, useState } from 'react'
import List from '../../components/board/List'
import * as boards from '../../apis/boards'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)

    // 🎁 게시글 목록 데이터
    const getList = async () => {
      const response = await boards.list(page, size)
      const data = await response.data
      const list = data.list
      const pagination = data.pagination
      console.log(data);
      console.log(list);
      console.log(pagination);
      
      setList(list)
      setPagination(pagination)
    }

    // 페이지 번호 클릭 ➡ URL page 파라미터 변경
    const updatePage = () => {
      const query = new URLSearchParams(location.search)
      const newPage = query.get("page") ?? 1
      const newSize = query.get("size") ?? 10
      console.log();
      

    }


    // ❓
    useEffect(() => {
      getList()
    }, [page, size])
    // 의존성배열 [page, size]
    // : page, size 바뀔 때마다 재실행 
    



  return (
    <>
        <List list={list} pagination={pagination}/>
    </>
  )
}

export default ListContainer