import { useState } from 'react';
import Card from './Card';

const List = ({ onToggle, todoList, onRemove }) => {
    
    // ✨ 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const todoListElement = document.querySelector('.todoList')
        const scrollHeight = todoListElement.scrollHeight  // 스크롤 높이
        const scrollTop = 
    }
    

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