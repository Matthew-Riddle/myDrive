package com.cooksys.mydrive.service;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.tomcat.jni.File;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.dto.FolderDto;
import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.repository.FileRepository;

@Service
public class FileService {
	FileRepository repo;
	FileMapper mapper;
	FolderService folderService;
	
	public FileService(FileRepository fileRepo, FileMapper fileMapper, FolderService folderService) {
		repo = fileRepo;
		mapper = fileMapper;
		this.folderService = folderService;
	}
	
	public FileDto createFile(MultipartFile file, String location){//saves file then returns the saved file
		
		Path path = null;
		if(location == null)
			path = Paths.get("./storage");//if location is not passed save in root
		else
			path = Paths.get("./storage", location); //if a location is given add it to the directory path
		
		FileEntity tmp = new FileEntity();//make a temp to send to the database
		
		tmp.setName(file.getOriginalFilename());//fill the temp with info from the multi
		tmp.setId(null);
		tmp.setLocation(path.toString());
		tmp.setDeleted(false);
		tmp.setFileSize(file.getSize());
		tmp.setContentType(file.getContentType());
		
		if(!Files.exists(path) && !Files.exists(Paths.get(path.toString(), file.getOriginalFilename()))) {//check to see if there is already a folder path setup
			try {
				FolderEntity folder = new FolderEntity();
				
				folder.setDeleted(false);
				folder.setId(null);
				folder.setLocation(location);
				folder.setName(location);
				folder.addFile(tmp);
				
				folderService.createFolder(folder);//create a new folder 
				
				Files.createDirectories(path); // if not create folder structure
				
				Files.write(Paths.get(path.toString(), file.getOriginalFilename()), file.getBytes());
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}
		else if (Files.exists(Paths.get(path.toString(), file.getOriginalFilename()))){
			return null;
		}
		

		
		
		

		return mapper.toDto(repo.save(tmp));	//save data to database
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
		
		Path path = Paths.get(tmp.getLocation(), tmp.getName()).toAbsolutePath();
		
		try {
			Files.delete(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.println(path.toString());
		return tmp;//return deleted entry
		
	}
	
}
