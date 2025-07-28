package com.aloha.todo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.todo.mapper.TodoMapper;

@Service
public class TodoServiceImpl implements TodoService {
    
    @Autowired private TodoMapper todoMapper;
}
