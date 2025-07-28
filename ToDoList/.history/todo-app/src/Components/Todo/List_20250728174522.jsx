import React from 'react'
import Card from './Card'

const List = () => {
    const todoList = [
        { "id" : "id-1", "name" : "1", "status" : false },
        { "id" : "id-2", "name" : "2", "status" : false },
        { "id" : "id-3", "name" : "3", "status" : false },
        { "id" : "id-4", "name" : "4", "status" : false },
        { "id" : "id-5", "name" : "5", "status" : false }
    ]

    return (
    <div className="todoList">
        <ul>
            {
                todoList.map((todo) => (
                    <Card todo={todo}/>
                ))
            }
        </ul>
    </div>
  )
}

export default List