import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
import Footer from './Footer'


const Container = () => {

  // 🧊 state
  const [input, setInput] = useState('')  
  const [todoList, setTodoList] = useState(
      [
          { "id" : "id-1", "name" : "할 일1", "status" : false },
          { "id" : "id-2", "name" : "할 일2", "status" : false },
          { "id" : "id-3", "name" : "할 일3", "status" : false },
          { "id" : "id-4", "name" : "할 일4", "status" : false },
          { "id" : "id-5", "name" : "할 일5", "status" : false }
      ]
  );



  // -------------------------✨ 이벤트 함수--------------------------
  /**
   * ⚡ 체크박스 토글 함수
   * @param {*} todo 
   */
  const onToggle = (todo) => {
        const updateTodoList = todoList.map(item => 
            item.id == todo.id 
            ? {...item, status : !item.status}
            : item
        )
        setTodoList(updateTodoList)
    }

    
    // ⚡ 할 일 입력 변경 함수
    const onChange


    // ⚡ 할 일 추가 함수
    const onSubmit = () => {

    }

  return (
    <div className="container">
        <Header />
        <Input input={input}/>
        <List onToggle={onToggle} todoList={todoList} />
        <Footer />
    </div>
  )
}

export default Container