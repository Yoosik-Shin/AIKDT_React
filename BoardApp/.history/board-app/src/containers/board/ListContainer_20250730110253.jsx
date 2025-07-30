import React, { useState } from 'react'
import List from '../../components/board/List'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useState({})
    const [List, setList] = useState([])

  return (
    <>
        <List list={list} pag/>
    </>
  )
}

export default ListContainer