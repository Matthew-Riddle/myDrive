package com.cooksys.service;


import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.cooksys.dto.FileDto;
import com.cooksys.entity.FileEntity;
import com.cooksys.mapper.FileMapper;
import com.cooksys.repository.FileRepository;

@Service
public class FileService {
	FileRepository repo;
	FileMapper mapper;
	
	public FileService(FileRepository fileRepo, FileMapper fileMapper) {
		repo = fileRepo;
		mapper = fileMapper;
		
	}
	
	public FileDto createFile(FileEntity file){//saves file then returns the saved file
		
		
		
		return repo.save(mapper.toFile(file));	
	}
	
	public FileDto getFileById(Long id) {
		
		return mapper.toDto(repo.findById(id).get());
	}
	
	public ArrayList<FileDto> getFiles() {
		
		return null;	
	}
	
	public FileDto updateFileById(Long id) {
		
		return null;	
	}
	
	public FileDto deleteFileById(Long id) {//returns null if failed returns deleted entry if successfull
		
		FileDto tmp = null;//temp for returning
		
		if(repo.findById(id) == null) //if id is not there return null for failed
			return tmp;
		
		tmp = mapper.toDto(repo.findById(id).get());//get the entry to return
		repo.deleteById(id);//delete the entry
		
		return tmp;//return deleted entry
		
	}
	
}
