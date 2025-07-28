package com.aloha.todo.mapper;

import com.aloha.todo.domain.Todos;

public interface TodoMapper extends BaseMapper<Todos> {
    
    // 전체 완료
    public int completeAll();

    // 전체 삭제
    public int deleteALL();;

}
