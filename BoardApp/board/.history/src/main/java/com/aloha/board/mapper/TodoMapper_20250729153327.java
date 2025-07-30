package com.aloha.board.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Todos;


@Mapper
public interface TodoMapper extends BaseMapper<Boards> {
    
    // 전체 완료
    public int completeAll() throws Exception;

    // 전체 삭제
    public int deleteAll() throws Exception;

}
