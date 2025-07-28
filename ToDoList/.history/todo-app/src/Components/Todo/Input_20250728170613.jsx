import React from 'react'

const Input = () => {
  return (
    <div>
        <form action="form">
            <input type="text"
                placeholder='할 일 입력'
                className='input'
                value=''
            />
            <button type='submit' className='btn'>

            </button>
        </form>
    </div>
  )
}

export default Input