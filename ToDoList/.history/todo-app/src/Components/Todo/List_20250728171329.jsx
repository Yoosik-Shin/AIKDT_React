import React from 'react'

const List = () => {
  return (
    <div className="todoList">
        <ul>
            {
                todoList.map((todo))
            }
        </ul>
    </div>
  )
}

export default List