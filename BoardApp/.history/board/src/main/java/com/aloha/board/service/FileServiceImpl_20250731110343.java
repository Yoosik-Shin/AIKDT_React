package com.aloha.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.aloha.board.domain.Files;
import com.aloha.board.mapper.FileMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {
    
    @Autowired FileMapper fileMapper;

    @Value("${upload.path}")
    private String uploadPath;      //upload 경로

    @Override
    public List<Files> list() {
        return fileMapper.list();
    }

    @Override
    public PageInfo<Files> list(int page, int size) {
        PageHelper.startPage(page, size);
        List<Files> list = fileMapper.list();
        PageInfo<Files> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public Files select(Long no) {
        
    }

    @Override
    public Files selectById(String id) {

    }

    @Override
    public boolean insert(Files entity) {

    }

    @Override
    public boolean update(Files entity) {

    }

    @Override
    public boolean updateById(Files entity) {

    }

    @Override
    public boolean delete(Long no) {

    }

    @Override
    public boolean deleteById(String id) {

    }

    @Override
    public boolean upload(Files file) throws Exception {

    }

    @Override
    public int upload(List<Files> fileList) throws Exception {

    }

    @Override
    public boolean download(String id, HttpServletResponse response) throws Exception {

    }

    @Override
    public List<Files> listByParent(Files file) {

    }

    @Override
    public int deleteByParent(Files file) {

    }

    @Override
    public int deleteFiles(String noList) {

    }

    @Override
    public int deleteFilesById(String idList) {

    }

    @Override
    public int deleteFileList(List<Long> noList) {

    }

    @Override
    public int deleteFileListById(List<String> idList) {

    }

    @Override
    public Files selectByType(Files file) {

    }

    @Override
    public Files listByType(Files file) {

    }
}
