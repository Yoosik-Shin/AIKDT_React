package com.aloha.todo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
// 다른 서버에서 자원을 요청하는 허용 범위를 지정하는 어노테이션
// 
@CrossOrigin("*")
@RestController
@RequestMapping("/todos")
public class TodoController {
    
}
