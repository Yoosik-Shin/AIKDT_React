import React, { useState } from 'react'

const Card = ({ todo }) => {
    let {id, name} = todo
    let isActive = status ? 'todoItem active' : 'todoItem'

    // state
    const [status, setStatus] = useState(todo.status)

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