import React from 'react'
import Card from './Card'

const List = () => {
  return (
    const todoList = [
        {
            "id" : "id-1",
            "name" : "todo 1",
            "status" : false
        }
    ]
    <div className="todoList">
        <ul>
            {
                todoList.map((todo) => (
                    <Card />
                ))
            }
        </ul>
    </div>
  )
}

export default List