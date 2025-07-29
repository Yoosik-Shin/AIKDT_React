import { useState } from 'react';
import Card from './Card';

const List = ({ onToggle, todoList, onRemove }) => {
    
    // ✨ 스크롤 이벤트 핸들러
    const 
    

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