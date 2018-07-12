package com.cooksys.mydrive.service;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.repository.FileRepository;

@Service
public class FileService {
	FileRepository repo;
	FileMapper mapper;
	
	public FileService(FileRepository fileRepo, FileMapper fileMapper) {
		repo = fileRepo;
		mapper = fileMapper;
		
	}
	
	public FileDto createFile(MultipartFile file, String location){//saves file then returns the saved file
		
		Path path = null;
		if(location == null)
			path = Paths.get("/storage");//if location is not passed save in root
		else
			path = Paths.get("/storage", location); //if a location is given add it to the directory path
		
		FileDto tmp = new FileDto();//make a temp to send to the database
		
		tmp.setName(file.getOriginalFilename());//fill the temp with info from the multi
		tmp.setId(null);
		tmp.setLocation(path.toString());
		tmp.setDeleted(false);
		tmp.setFileSize(file.getSize());
		tmp.setContentType(file.getContentType());
		
		if(!Files.exists(path.toAbsolutePath())) {//check to see if there is already a folder path setup
			try {
				Files.createDirectories(path); // if not create folder structure
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}
		
		path = Paths.get(path.toString(), file.getOriginalFilename());//add the file to the folder path
		
		if(Files.exists(path))//see if it already exhists if it does error
			return null;//file name already exhists
		
		try {
			Files.write(path, file.getBytes());//finally write to file
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
		

		return mapper.toDto(repo.save(mapper.toFile(tmp)));	//save data to database
	}
	
	public FileDto getFileById(Long id) {
		
		return mapper.toDto(repo.findById(id).get());
	}
	
	public List<FileDto> getFiles() {
		
		return repo.findAll().stream().map(mapper::toDto).collect(Collectors.toList());	
	}
	
	public FileDto updateFileById(FileDto file, Long id) {
		file.setId(id);
		return mapper.toDto(repo.save(mapper.toFile(file)));	
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
