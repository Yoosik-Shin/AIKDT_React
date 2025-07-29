import { useState } from 'react';
import Card from './Card';

const List = ({ onToggle }) => {
     

    

    return (
    <div className="todoList">
        <ul>
            {
                todoList.map((todo) => (
                    <Card todo={todo} onToggle={onToggle}/>
                ))
            }
        </ul>
    </div>
    )
}

export default List