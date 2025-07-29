import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
import Footer from './Footer'


const Container = () => {

  // 🧊 state
  const [input, setInput] = useState('')  
  const [todoList, setTodoList] = useState([]);



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
    const onSubmit = async (e) => {
      e.preventDefault()  // 기본 이벤트 동작 방지, 폼 제출시 새로고침 방지
      let name = input    // 할 일
      if (input == '') name = '제목없음'

      // 데이터 등록 요청
      const data = {
        name : name,
        seq : 1
      }
      const option = {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      }
      try {
        const url = 'http://localhost:8080/todos'
        const response = await fetch(url, option)
        const msg = await response.text() // SUCCESS, FAIL
        if (msg == 'SUCCESS')
          console.log('할 일 등록 성공')
        else
          console.log('할 일 등록 실패')
        
        
        // 할 일 목록 요청
        getList()

        // 입력 값 비우기
        setInput('')
      } catch (error) {
        console.error(error)
      }
    }

    // 데이터 목록 요청
    const getList = () => {
      // 할 일 목록 요청
      const url = 'http://localhost:8080/todos'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // data.list       : 할 일 목록
          //data.pagination  : 페이지 정보
          setTodoList(data.list)
        })
        .catch(error => { console.error(error) })
    }




  return (
    <div className="container">
        <Header />
        <Input input={input} onChange={onChange} onSubmit={onSubmit}/>
        <List onToggle={onToggle} todoList={todoList} />
        <Footer />
    </div>
  )
}

export default Container