package com.aloha.board.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Files;

@Mapper
public interface FIleMapper extends BaseMapper<Files> {
    
    // 부모 기준 목록
    public List<Files> listByParent
    // 부모 기준 삭제
    // 선택 삭제(String) - no
    // 선택 삭제(String) - id
    // 선택 삭제(List) - no
    // 선택 삭제(List) - id
    // 타입별 파일 조회
    // 타입별 파일 목록
}
