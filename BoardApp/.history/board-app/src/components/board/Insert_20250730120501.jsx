import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/Insert.module.css'

const Insert = () => {
  return (
    <div className="container">
      <h1 className='title'>게시글 쓰기</h1>
      {/* <table className='table' border={1}> */}
      <table className={`${styles.table}`} border={1}>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" className={styles[]} />
          </td>
        </tr>
        <tr>
          <td>작성자</td>
          <td>
            <input type="text" className={styles[]} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10}
                className={styles[]}></textarea>
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <Link to="/boards" className="btn">목록</Link>
        <button className='btn'>등록</button>
      </div>
    </div>
  )
}

export default Insert