import React from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
import Footer from './Footer'


const Container = () => {

  // ✨ 이벤트 함수
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


    
  return (
    <div className="container">
        <Header />
        <Input />
        <List onToggle={onToggle} />
        <Footer />
    </div>
  )
}

export default Container