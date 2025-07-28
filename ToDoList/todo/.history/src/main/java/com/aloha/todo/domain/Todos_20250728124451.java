package com.aloha.todo.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Todos {
    private Long no;            // PK
    private String id;           // UUID    
    private String name;
    private Boolean status;
    private Integer seq;
    private Date createdAt;
    private Date updatedAt;
    
    
    public Todos() {
        this.id = UUID.randomUUID().toString();
    }

    
}
