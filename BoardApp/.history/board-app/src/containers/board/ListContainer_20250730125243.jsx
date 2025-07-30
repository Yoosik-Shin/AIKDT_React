import React, { useState } from 'react'
import List from '../../components/board/List'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [list, setList] = useState([])
    useS

  return (
    <>
        <List list={list} pagination={pagination}/>
    </>
  )
}

export default ListContainer