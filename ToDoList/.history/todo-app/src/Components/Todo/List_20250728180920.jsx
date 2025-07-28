import React from 'react'
import Card from './Card'

const List = () => {
    // 🧊 state
    const [todoList, setTodoList] = useState 
    
    
    [
        { "id" : "id-1", "name" : "할 일1", "status" : false },
        { "id" : "id-2", "name" : "할 일2", "status" : false },
        { "id" : "id-3", "name" : "할 일3", "status" : true },
        { "id" : "id-4", "name" : "할 일4", "status" : false },
        { "id" : "id-5", "name" : "할 일5", "status" : true }
    ]

    const onToggle = (todo) => {
        const updateTodoList = todoList.map(item => 
            item.id == todo.id 
            ? {...item, status : !item.status}
            : item
        )
    }

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