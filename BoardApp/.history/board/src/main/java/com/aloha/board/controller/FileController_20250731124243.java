package com.aloha.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.board.domain.Files;
import com.aloha.board.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/files")
public class FileController {
    
    @Autowired private FileService fileService;

    @Autowired ResourceLoader resourceLoader;       // resources 자원 가져오는 객체


    // sp-crud
    
    @GetMapping()
    public ResponseEntity<?> getAll() {
        try {
            List<Files> list = fileService.list();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable String id) {
        try {
            Files file = fileService.selectById(id);
            return new ResponseEntity<>(file, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Files files) {
        try {
            boolean result = fileService.insert(files);
            if (result) 
                return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED); // 201 created
            else
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Files files) {
        try {
            boolean result = fileService.update(files);
            if (result) 
                return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED); // 201 created
            else
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") String id) {
        try {
            boolean result = fileService.deleteById(id);
            if (result) 
                return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED); // 201 created
            else
                return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // 파일 선택 삭제
    @DeleteMapping("")
    public ResponseEntity<?> deleteFiles(
        @RequestParam(value="noList", required = false)
    )
    // 파일 다운로드

    // 썸네일 이미지

    // 파일 타입별 조회
}
