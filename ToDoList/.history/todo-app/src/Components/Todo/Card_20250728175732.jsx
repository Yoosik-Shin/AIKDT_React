import { useState } from 'react'

const Card = ({ todo }) => {
    // 🧊 state
    // const [status, setStatus] = useState(todo.status)

    let {id, name} = todo
    let isActive = status ? 'todoItem active' : 'todoItem'

    // 체크박스 변경 핸들러 ➡ List 부모 컴포넌트로 전환 예정
    // const onChange = (e) => {
    //     const newStatus = e.target.checked
    //     setStatus(newStatus)
    // }

    return (
        <li className={isActive}>
            <div className="item">
                <input type="checkbox" id={id} checked={status}
                        onChange={onChange} />
                <label htmlFor={id}></label>
                <span>{ name }</span>
            </div>
            <div className="item">
                <button className='btn'>삭제</button>
            </div>
        </li>
    )
}

export default Card