package com.aloha.board.service;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
        return fileMapper.select(no);
    }

    @Override
    public Files selectById(String id) {
        return fileMapper.selectById(id);
    }

    @Override
    public boolean insert(Files file) {
        return fileMapper.insert(file) > 0;
    }

    @Override
    public boolean update(Files file) {
        return fileMapper.update(file) > 0;
    }

    @Override
    public boolean updateById(Files file) {
        return fileMapper.updateById(file) > 0;
    }

    // 파일 시스템의 파일 삭제
    public boolean delete(Files file) {
        if (file == null) {
            log.info("파일이 없습니다.");
            return false;
        }

        String filePath = file.getFilePath();
        File deleteFile = new File(filePath);

        if (!deleteFile.exists()) {
            log.error("파일이 존재하지 않습니다");
            return false;
        }

        // 파일 삭제
        boolean deleted = deleteFile.delete();
        if (deleted) {
            log.info("파일이 삭제되었습니다.");
            log.info("- " + filePath);
        }
        return true;
    }



    @Override
    public boolean delete(Long no) {
        Files file = fileMapper.select(no);     // 파일 정보 조회
        delete(file);                           // 1️⃣ 파일 삭제
        return fileMapper.delete(no) > 0;       // 2️⃣ DB 데이터 삭제
    }

    @Override
    public boolean deleteById(String id) {
        Files file = fileMapper.selectById(id);     // 파일 정보 조회
        delete(file);                               // 1️⃣ 파일 삭제
        return fileMapper.deleteById(id) > 0;       // 2️⃣ DB 데이터 삭제
    }

    @Override
    public boolean upload(Files file) throws Exception {
        int result = 0;
        MultipartFile multipartFile = file.getData();
        // 파일이 없을 때
        if (multipartFile.isEmpty()) {
            return false;
        }
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
