package com.aloha.board.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Files {
    private Long no;
    private String id;
    private String pTable;
    private Long ptNo;
    private String fileName;
    private String originName;
    private String filePath;
    private Long fileSize;
    private Date createdAt;
    private Date updatedAt;
}
