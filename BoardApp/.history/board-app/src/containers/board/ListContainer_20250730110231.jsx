import React, { useState } from 'react'
import List from '../../components/board/List'

const ListContainer = () => {

    // 🧊 state
    const [pagination, setPagination] = useStatee({})
    const [List, setList] = useState([])

  return (
    <>
        <List />
    </>
  )
}

export default ListContainer