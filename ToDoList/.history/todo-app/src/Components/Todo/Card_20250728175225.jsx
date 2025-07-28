import { useState } from 'react'

const Card = ({ todo }) => {
    // state
    const [status, setStatus] = useState(todo.status)
    let {id, name} = todo
    let isActive = status ? 'todoItem active' : 'todoItem'


    return (
        <li className={isActive}>
            <div className="item">
                <input type="checkbox" id={id} checked={status} />
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