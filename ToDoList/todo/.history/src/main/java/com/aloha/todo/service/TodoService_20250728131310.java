package com.aloha.todo.service;

import com.aloha.todo.domain.Todos;

public interface TodoService extends BaseService<Todos> {
    
    public boolean completeAll() throws Exception;
    
    
}
