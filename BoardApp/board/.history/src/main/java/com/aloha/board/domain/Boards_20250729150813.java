package com.aloha.board.domain;

import lombok.Data;

@Data
public class Boards {
    private Long no;
    private String id;
    private String title;
    private String writer;
    private String text;
    private Date createdAt;
    private Date updatedAt;
}
