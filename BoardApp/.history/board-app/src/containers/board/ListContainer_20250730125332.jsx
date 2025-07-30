import React, { useState } from 'react'
import List from '../../components/board/List'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)

    // 🎁 게시글 목록 데이터
    const getList = 

  return (
    <>
        <List list={list} pagination={pagination}/>
    </>
  )
}

export default ListContainer