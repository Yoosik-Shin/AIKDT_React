package com.aloha.board.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Files;

@Mapper
public interface FIleMapper extends BaseMapper<Files> {
    
    // 부모 기준 목록
    // 부모 기준 삭제
}
