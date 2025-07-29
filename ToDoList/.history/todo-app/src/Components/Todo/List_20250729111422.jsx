import { useEffect, useState } from 'react';
import Card from './Card';

const List = ({ onToggle, todoList, onRemove }) => {
    
    // 🧊 state 선언
    const [page, setPage] = useState(1)
    const [newList, setNewList] = useState([])

    // 데이터 목록 추가 함수
    const addList = (page) => {
        // 할 일 목록 요청
        
    }


    // ✨ 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const todoListElement = document.querySelector('.todoList')
        const scrollHeight = todoListElement.scrollHeight  // 스크롤 높이
        const scrollTop = todoListElement.scrollTop        // 스크롤 위치
        const clientHeight = todoListElement.clientHeight  // 컨텐츠 높이
        // console.log(`scrollTop : ${scrollTop}`)         // 950
        // console.log(`scrollHeight : ${scrollHeight}`)   // 450
        // console.log(`clientHeight : ${clientHeight}`)   // 500

        // 스크롤 맨 마지막
        if (clientHeight + scrollTop == scrollHeight) {
            // alert('마지막 입니다!)
            // 다음 페이지 목록 데이터 추가
        }
    }
    
    useEffect(() => {
        // 스크롤 이벤트 등록
        const todoListElement = document.querySelector('.todoList')
        if (todoListElement) {
            todoListElement.addEventListener('scroll', handleScroll)
        }
    })

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