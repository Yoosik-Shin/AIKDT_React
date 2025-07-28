import React from 'react'

const Card = ({ todo }) => {
    let {id, name, status} = todo
    
  return (
    <li className="todoItem">
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