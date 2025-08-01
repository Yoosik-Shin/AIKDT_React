package com.aloha.board.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Files {
    private Long no;
    private String id;
    private String pTable;          // parentTable
    private Long pNo;               // parentNo
    private String fileName;
    private String originName;
    private String filePath;
    private Long fileSize;
    private Long seq;
    private 
    private Date createdAt;
    private Date updatedAt;
}
