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
    const onChange = (e) => {
      // e.target       : <input>
      // e.target.value : <input>에서 입력한 값
      console.log(e.target.value)
      setInput(e.target.value)
    }


    // ⚡ 할 일 추가 함수
    const onSubmit = (e) => {
      e.preventDefault()  // 기본 이벤트 동작 방지, 폼 제출시 새로고침 방지
      let name = input    // 할 일
      if (input == '') name = '제목없음'

      // 데이터 등록 요청
      const data = {
        name : name.replaceseq : 1
      }
    }

  return (
    <div className="container">
        <Header />
        <Input input={input} onChange={onChange}/>
        <List onToggle={onToggle} todoList={todoList} />
        <Footer />
    </div>
  )
}

export default Container