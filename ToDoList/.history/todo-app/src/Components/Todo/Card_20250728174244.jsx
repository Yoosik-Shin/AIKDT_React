import React from 'react'

const Card = ({ todo }) => {
  return (
    <li className="todoItem">
        <div className="item">
            <input type="checkbox" name="" id="" />
            <label htmlFor="id-1"></label>
            <span>todo 1</span>
        </div>
        <div className="item">
            <button className='btn'>삭제</button>
        </div>
    </li>
  )
}

export default Card