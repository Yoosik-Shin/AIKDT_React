package com.aloha.todo.domain;

import lombok.Data;

@Data
public class Todos {
    private Long no;
    private String id;
    private String name;
    private Boolean status;
    private Integer seq;
    private Date createdAt;
    private Date updated
}
