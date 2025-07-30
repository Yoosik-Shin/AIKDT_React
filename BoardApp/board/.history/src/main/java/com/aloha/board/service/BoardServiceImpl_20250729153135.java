package com.aloha.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.board.domain.Boards;
import com.aloha.board.mapper.BoardMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class BoardServiceImpl implements BoardService {
    
    @Autowired private BoardMapper boardMapper;

    @Override
    public List<Board> list() {
        return boardMapper.list();
    }

    @Override
    public PageInfo<Board> list(int page, int size) {
        
        // ⭐ PageHelper.startPage( 현재페이지, 페이지당 데이터 수 )
        PageHelper.startPage(page, size);
        List<Board> list = boardMapper.list();
        PageInfo<Board> pageInfo = new PageInfo<>(list);
        
        // 정렬
        // 1️⃣ status 오름차순
        // 2️⃣ seq 오름차순
        pageInfo.getList().sort((t1, t2) -> {
            int statusCompare = t1.getStatus().compareTo(t2.getStatus());
            if( statusCompare != 0 ) {
                return statusCompare;
            }
            return t1.getSeq().compareTo(t2.getSeq());
        });
        return pageInfo;
    }

    @Override
    public Board select(Long no) {
        return todoMapper.select(no);
    }

    @Override
    public TodBoardos selectById(String id) {
        return todoMapper.selectById(id);
    }

    @Override
    public boolean insert(Todos entity) {
        return todoMapper.insert(entity) > 0;
    }

    @Override
    public boolean update(Todos entity) {
        return todoMapper.update(entity) > 0;
    }

    @Override
    public boolean updateById(Todos entity) {
        return todoMapper.updateById(entity) > 0;
    }

    @Override
    public boolean delete(Long no) {
        return todoMapper.delete(no) > 0;
    }

    @Override
    public boolean deleteById(String id) {
        return todoMapper.deleteById(id) > 0;
    }

    @Override
    public boolean completeAll() throws Exception {
        return todoMapper.completeAll() > 0;
    }

    @Override
    public boolean deleteAll() throws Exception {
        return todoMapper.deleteAll() > 0;
    }
}
