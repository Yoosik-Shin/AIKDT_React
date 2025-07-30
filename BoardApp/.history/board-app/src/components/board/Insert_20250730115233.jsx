import React from 'react'

const Insert = () => {
  return (
    <div className="container">
      <h1 className='title'>게시글 쓰기</h1>
      <table className='table' border={1}>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" className='form-input' />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Insert