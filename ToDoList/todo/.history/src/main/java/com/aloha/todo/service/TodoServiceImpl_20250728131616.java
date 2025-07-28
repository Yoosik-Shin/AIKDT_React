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
    }

    @Override
    public PageInfo<Todos> list(int page, int size) {
    }

    @Override
    public Todos select(Long no) {
    }

    @Override
    public Todos selectById(String id) {
    }

    @Override
    public boolean insert(Todos entity) {
    }

    @Override
    public boolean update(Todos entity) {
    }

    @Override
    public boolean updateById(Todos entity) {
    }

    @Override
    public boolean delete(Long no) {
    }

    @Override
    public boolean deleteById(String id) {
    }

    @Override
    public boolean completeAll() throws Exception {
    }

    @Override
    public boolean deleteAll() throws Exception {
    }
}
