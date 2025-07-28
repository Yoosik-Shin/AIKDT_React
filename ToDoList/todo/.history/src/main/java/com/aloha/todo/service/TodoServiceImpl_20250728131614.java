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
        throw new UnsupportedOperationException("Unimplemented method 'list'");
    }

    @Override
    public PageInfo<Todos> list(int page, int size) {
        throw new UnsupportedOperationException("Unimplemented method 'list'");
    }

    @Override
    public Todos select(Long no) {
        throw new UnsupportedOperationException("Unimplemented method 'select'");
    }

    @Override
    public Todos selectById(String id) {
        throw new UnsupportedOperationException("Unimplemented method 'selectById'");
    }

    @Override
    public boolean insert(Todos entity) {
        throw new UnsupportedOperationException("Unimplemented method 'insert'");
    }

    @Override
    public boolean update(Todos entity) {
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean updateById(Todos entity) {
        throw new UnsupportedOperationException("Unimplemented method 'updateById'");
    }

    @Override
    public boolean delete(Long no) {
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public boolean deleteById(String id) {
        throw new UnsupportedOperationException("Unimplemented method 'deleteById'");
    }

    @Override
    public boolean completeAll() throws Exception {
        throw new UnsupportedOperationException("Unimplemented method 'completeAll'");
    }

    @Override
    public boolean deleteAll() throws Exception {
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }
}
