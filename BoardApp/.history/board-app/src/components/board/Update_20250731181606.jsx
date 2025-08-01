import React, { use, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './css/Update.module.css'

const Update = ({board, fileList, onUpdate, onDelete, onDownload}) => {

  // 🧊 state
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [content, setContent] = useState('')
  const [fileIdList, setfileIdList] = useState([])    // 선택 삭제 id 목록
  const [mainFile, setMainFile] = useState(null)
  const [files, setFiles] = useState(null)

  // 변경 이벤트 함수
  const changeTitle = (e) => { setTitle(e.target.value)}
  const changeWriter = (e) => { setWriter(e.target.value)}
  const changeContent = (e) => { setContent(e.target.value)}

  const {id} = useParams()

  // 수정 함수 
  const onSubmit = () => {
    const data = {
      'id': id,
      'title': title,
      'writer': writer,
      'content': content
    }
    const headers = {'Content-Type' : 'application/json'}

    // TODO : onInsert() 전달받아서 호출
    onUpdate(data, headers)
  }

  useEffect(() => {
    if (board) {
      setTitle(board.title)
      setWriter(board.writer)
      setContent(board.content)
    }
  }, [board])
  
  const handleDelete = () => {
    const check = window.confirm('정말 삭제하시겠습니까?')
    if (check) {
      onDelete(id)
    }
  }

  // 선택 삭제 핸들러
  const handleCheckedFileDelete = () => {
    const check = window.confirm(`선택한 ${fileIdList.length} 개의 파일을 정말 삭제하시겠습니까?`)
    if (check) {
      deleteCheckedFiles(fileIdList)
      setFileIdList([])
    }
  }

  // ✅ 파일 선택 핸들러
  const checkFileId = (id) => {
    console.log(id);
    
  }



  return (
    <div className="container">
      <h1 className='title'>게시글 수정</h1>
      <table className={styles.table} border={1}>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" onChange={changeTitle} value={title} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input type="text" onChange={changeWriter} value={writer} className={styles['form-input']} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10}
                onChange={changeContent}
                value={content}
                className={styles['form-input']}></textarea>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
              {
                fileList.map((file) => (
                  <div className='flex-box' key={file.id}>
                    <div className="item">
                      <input type="checkbox" onChange={() => checkFileId(file.id)} />
                      <div className="item-img">
                        { file.type == 'MAIN' && <span className='badge'>대표</span>}
                        <img src={`/api/files/img/${file.id}`} alt={file.originName}
                              className='file-img'/>
                      </div>
                      <span>{file.originName} ({file.fileSize})</span>
                    </div>
                    <div className="item">
                      <button className='btn' onClick={() => onDownload(file.id, file.originName)}>
                        다운로드
                        </button>
                      <button className='btn' onClick={() => handleFileDelete(file.id)}>
                        삭제
                        </button>
                    </div>
                  </div>
                ))
              }
          </td>
        </tr>
      </table>
      <div className="btn-box">
        <div>
          <Link to="/boards" className="btn">목록</Link>
          <button className='btn' onClick={handleCheckedFileDelete}>선택 삭제</button>
        </div>
        <div>
          <button className='btn' onClick={onSubmit}>수정</button>
          <button className='btn' onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </div>
  )
}

export default Update