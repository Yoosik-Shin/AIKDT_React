package com.aloha.board.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.board.domain.Files;

@Mapper
public interface FIleMapper extends BaseMapper<Files> {
    
    // 부모 기준 목록
    public List<Files> listByParent(Files file);

    // 부모 기준 삭제
    public int deleteByParent(Files file);

    // 선택 삭제(String) - no
    public int deleteFiles(String noList);

    // 선택 삭제(String) - id
    public int deleteFilesById(String idList);

    // 선택 삭제(List) - no
    public int deleteFileList(@Param("noList") List<Long> noList);
    
    // 선택 삭제(List) - id
    public int deleteFileListById(@Param("idList") List<String> noList);

    // 타입별 파일 조회
    // 타입별 파일 목록
}
