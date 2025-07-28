package com.aloha.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.todo.domain.Todos;
import com.aloha.todo.mapper.TodoMapper;
import com.github.pagehelper.PageInfo;

@Service
public class TodoServiceImpl implements TodoService {
    
    @Autowired private TodoMapper todoMapper;

    @Override
    public List<Todos> list() {
        return todoMapper.list();
    }

    @Override
    public PageInfo<Todos> list(int page, int size) {
        return todoMapper.list();
    }

    @Override
    public Todos select(Long no) {
        return todoMapper.list();
    }

    @Override
    public Todos selectById(String id) {
        return todoMapper.list();
    }

    @Override
    public boolean insert(Todos entity) {
        return todoMapper.list();
    }

    @Override
    public boolean update(Todos entity) {
        return todoMapper.list();
    }

    @Override
    public boolean updateById(Todos entity) {
        return todoMapper.list();
    }

    @Override
    public boolean delete(Long no) {
        return todoMapper.list();
    }

    @Override
    public boolean deleteById(String id) {
        return todoMapper.list();
    }

    @Override
    public boolean completeAll() throws Exception {
        return todoMapper.list();
    }

    @Override
    public boolean deleteAll() throws Exception {
        return todoMapper.list();
    }
}
