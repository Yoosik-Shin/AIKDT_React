import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const boards = [
        { no: 1, id: 'board1', title: '제목1', writer: '작성자1', content: '내용1' },
        { no: 2, id: 'board2', title: '제목2', writer: '작성자2', content: '내용2' },
        { no: 3, id: 'board3', title: '제목3', writer: '작성자3', content: '내용3' },
        { no: 4, id: 'board4', title: '제목4', writer: '작성자4', content: '내용4' },
        { no: 5, id: 'board5', title: '제목5', writer: '작성자5', content: '내용5' }
    ]

  return (
    <>
        <div className="container">
            <h1 className='title'>게시글 제목</h1>
            <Link to='/boards/insert' className='btn'>글쓰기</Link>

            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.length == 0
                        ?
                        <tr>
                            <td colSpan={4} align='center'>
                                조회된 데이터가 없습니다.
                            </td>
                        </tr>
                        :
                        boards.map( (board) => {
                            
                            return (
                            <tr>
                                <td>{board.no}</td>
                                <td>
                                    <Link to={`/boards/${board.title}`}>
                                    {board.title}
                                    </Link>
                                </td>
                                <td>{board.writer}</td>
                                <td>등록일자</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default List