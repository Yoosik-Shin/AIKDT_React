import React, { useState } from 'react'
import List from '../../components/board/List'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([])
    const [page, setPage] = useState(second)

  return (
    <>
        <List list={list} pagination={pagination}/>
    </>
  )
}

export default ListContainer