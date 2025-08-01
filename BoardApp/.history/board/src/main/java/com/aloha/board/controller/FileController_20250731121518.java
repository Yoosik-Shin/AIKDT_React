package com.aloha.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.board.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/files")
public class FileController {
    
    @Autowired private FileService fileService;

    @Autowired ResourceLoader resourceLoader;       // resources 자원 가져오는 객체


    // sp-crud
    
}
