package com.cooksys.service;


import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.cooksys.dto.FileDto;

@Service
public class FileService {
	FileRepository repo;
	FileMapper mapper;
	
	public FileService(FileRepository fileRepo, FileMapper fileMapper) {
		repo = fileRepo;
		mapper = fileMapper;
		
	}
	
	public FileDto createFile(){
		
		return null;		
	}
	
	public FileDto getFileById(Long id) {
		
		return null;	
	}
	
	public ArrayList<FileDto> getFiles() {
		
		return null;	
	}
	
	public FileDto updateFileById(Long id) {
		
		return null;	
	}
	
	public FileDto deleteFileById(Long Id) {
		
		return null;	
	}
	
}
