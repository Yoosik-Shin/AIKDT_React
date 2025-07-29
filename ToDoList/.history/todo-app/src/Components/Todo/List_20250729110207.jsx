import { useState } from 'react';
import Card from './Card';

const List = ({ onToggle, todoList, onRemove }) => {
    

    

    return (
    <div className="todoList">
        <ul>
            {
                todoList.map((todo) => (
                    <Card todo={todo} onToggle={onToggle} onRemove={onRemove}/>
                ))
            }
        </ul>
    </div>
    )
}

export default List