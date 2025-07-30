package com.aloha.board.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Boards {
    private Long no;
    private String id;
    private String title;
    private String writer;
    private String content;
    private Date createdAt;
    private Date updatedAt;

    public Boards() {
        
    }
}
