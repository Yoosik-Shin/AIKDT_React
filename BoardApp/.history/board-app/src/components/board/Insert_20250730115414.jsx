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
        <tr>
          <td>작성자</td>
          <td>
            <input type="text" className='form-input' />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10}
                className='form-input'></textarea>
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <Link to=></Link>
      </div>
    </div>
  )
}

export default Insert