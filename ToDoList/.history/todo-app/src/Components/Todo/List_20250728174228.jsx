import React from 'react'
import Card from './Card'

const List = () => {
    const todoList = [
        { "id" : "id-1", "name" : "todo 1", "status" : false },
        { "id" : "id-2", "name" : "todo 2", "status" : false },
        { "id" : "id-3", "name" : "todo 3", "status" : false },
        { "id" : "id-4", "name" : "todo 4", "status" : false },
        { "id" : "id-5", "name" : "todo 5", "status" : false }
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