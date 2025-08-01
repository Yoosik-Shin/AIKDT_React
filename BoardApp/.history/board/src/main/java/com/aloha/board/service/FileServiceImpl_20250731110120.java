package com.aloha.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.aloha.board.domain.Files;
import com.aloha.board.mapper.FileMapper;
import com.github.pagehelper.PageInfo;

import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {
    
    @Autowired FileMapper fileMapper;

    @Value("${upload.path}")
    private String uploadPath;

    @Override
    public List<Files> list() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'list'");
    }

    @Override
    public PageInfo<Files> list(int page, int size) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'list'");
    }

    @Override
    public Files select(Long no) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'select'");
    }

    @Override
    public Files selectById(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectById'");
    }

    @Override
    public boolean insert(Files entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'insert'");
    }

    @Override
    public boolean update(Files entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public boolean updateById(Files entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateById'");
    }

    @Override
    public boolean delete(Long no) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public boolean deleteById(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteById'");
    }

    @Override
    public boolean upload(Files file) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'upload'");
    }

    @Override
    public int upload(List<Files> fileList) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'upload'");
    }

    @Override
    public boolean download(String id, HttpServletResponse response) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'download'");
    }

    @Override
    public List<Files> listByParent(Files file) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'listByParent'");
    }

    @Override
    public int deleteByParent(Files file) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteByParent'");
    }

    @Override
    public int deleteFiles(String noList) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteFiles'");
    }

    @Override
    public int deleteFilesById(String idList) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteFilesById'");
    }

    @Override
    public int deleteFileList(List<Long> noList) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteFileList'");
    }

    @Override
    public int deleteFileListById(List<String> idList) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteFileListById'");
    }

    @Override
    public Files selectByType(Files file) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectByType'");
    }

    @Override
    public Files listByType(Files file) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'listByType'");
    }
}
