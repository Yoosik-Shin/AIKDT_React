package com.aloha.todo.mapper;

public interface BaseMapper<E> {
    
    public List<E> list();
    public E select(Long no);
    public E selectById(String id);
    public int insert(E entity);
    

}
