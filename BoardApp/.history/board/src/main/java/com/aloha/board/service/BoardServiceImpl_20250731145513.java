package com.aloha.board.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aloha.board.domain.Boards;
import com.aloha.board.domain.Files;
import com.aloha.board.mapper.BoardMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {
    
    @Autowired private BoardMapper boardMapper;
    @Autowired private FileService fileService;


    @Override
    public List<Boards> list() {
        return boardMapper.list();
    }

    @Override
    public PageInfo<Boards> list(int page, int size) {
        
        // ⭐ PageHelper.startPage( 현재페이지, 페이지당 데이터 수 )
        PageHelper.startPage(page, size);
        List<Boards> list = boardMapper.list();
        PageInfo<Boards> pageInfo = new PageInfo<>(list);
        
        // 정렬
        // 1️⃣ status 오름차순
        // 2️⃣ seq 오름차순
        // pageInfo.getList().sort((t1, t2) -> {
        //     int statusCompare = t1.getStatus().compareTo(t2.getStatus());
        //     if( statusCompare != 0 ) {
        //         return statusCompare;
        //     }
        //     return t1.getSeq().compareTo(t2.getSeq());
        // });
        return pageInfo;
    }

    @Override
    public Boards select(Long no) {
        return boardMapper.select(no);
    }

    @Override
    public Boards selectById(String id) {
        return boardMapper.selectById(id);
    }

    @Override
    public boolean insert(Boards entity) {

        return boardMapper.insert(entity) > 0;
    }

    /**
     * 파일 업로드
     * @param boards
     * @return
     */
    public int upload(Boards board) {
        int result = 0;
        String pTable = "boards";
        Long pNo = board.getNo();

        List<Files> uploadFileList = new ArrayList<>();

        MultipartFile mainFile = board.getMainfile();
        if (mainFile != null && !mainFile.isEmpty()) {
            Files mainFileInfo = new Files();
            mainFileInfo.setPTable(pTable);
            mainFileInfo.setPNo(pNo);
            mainFileInfo.setData(mainFile);
            mainFileInfo.setType("MAIN");
            uploadFileList.add(mainFileInfo);
        }

        List<MultipartFile> files = board.getFiles();
        if (files != null && !files.isEmpty()) {
            for (MultipartFile multipartFile : files) {
                if (multipartFile.isEmpty())
                    continue;
                Files fileInfo = new Files();
                fileInfo.setPTable(pTable);
                fileInfo.setPNo(pNo);
                fileInfo.setData(multipartFile);
                fileInfo.setType("SUB");
                uploadFileList.add(fileInfo);
            }
        }
        try {
            result += fileService.upload(uploadFileList);
        } catch (Exception e) {
            log.error("게시글 파일 업로드 중 에러 발생");
            e.printStackTrace();
        }
    }



    @Override
    public boolean update(Boards entity) {
        return boardMapper.update(entity) > 0;
    }

    @Override
    public boolean updateById(Boards entity) {
        return boardMapper.updateById(entity) > 0;
    }

    @Override
    public boolean delete(Long no) {
        return boardMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) {
        return boardMapper.deleteById(id) > 0;
    }

    @Override
    public boolean completeAll() throws Exception {
        return boardMapper.completeAll() > 0;
    }

    @Override
    public boolean deleteAll() throws Exception {
        return boardMapper.deleteAll() > 0;
    }
}
