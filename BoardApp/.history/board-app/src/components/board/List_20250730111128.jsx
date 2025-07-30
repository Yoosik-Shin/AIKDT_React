import React from 'react'
import { Link } from 'react-router-dom'
import './css/List.css'

const List = ({ list, pagination}) => {
    const boards = [
        { no: 1, id: 'board1', title: '제목1', writer: '작성자1', content: '내용1', createdAt: '2025-07-30 10:55:25' },
        { no: 2, id: 'board2', title: '제목2', writer: '작성자2', content: '내용2', createdAt: '2025-07-30 10:55:25' },
        { no: 3, id: 'board3', title: '제목3', writer: '작성자3', content: '내용3', createdAt: '2025-07-30 10:55:25' },
        { no: 4, id: 'board4', title: '제목4', writer: '작성자4', content: '내용4', createdAt: '2025-07-30 10:55:25' },
        { no: 5, id: 'board5', title: '제목5', writer: '작성자5', content: '내용5', createdAt: '2025-07-30 10:55:25' }
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
                                    <td>{board.createdAt}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {/* 페이지네이션 */}
                <div className="pagination">
                    <Link to={`/boards?page=${pagination.first}`} className='btn-page'>
                        처음
                    </Link>
                    <Link to={`/boards?page=${pagination.prev}`} className='btn-page'>
                        이전
                    </Link>

                    <Link to={`/boards?page`} className='btn-page'>1</Link>
                    <Link to={`/boards?page`} className='btn-page'>2</Link>
                    <Link to={`/boards?page`} className='btn-page'>3</Link>

                    <Link to={`/boards?page=${pagination.next}`} className='btn-page'>
                        다음
                    </Link>
                    <Link to={`/boards?page=${pagination.last}`} className='btn-page'>
                        마지막
                    </Link>
                </div>
            </div>
        </>
    )
}

export default List