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
import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;

@Service
public class FileService {
	FileRepository fileRepo;
	FileMapper mapper;
	FileRepository fileRepository;
	FolderRepository folderRepository;
	
	public FileService(FileRepository fileRepo, FileMapper fileMapper, FileRepository fileRepository, FolderRepository folderRepository) {
		this.fileRepo = fileRepo;
		mapper = fileMapper;
		this.fileRepository = fileRepository;
		this.folderRepository = folderRepository;
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
		

		if(!Files.exists(path))
			return null;//errors if it does not exhist
		
		if(location != null) {
			FolderEntity asdf = folderRepository.getByLocation(location);	
			asdf.addFile(tmp);	
			fileRepo.save(tmp);
			folderRepository.save(asdf);
		}		
		else
			fileRepo.save(tmp);

		try {
			Files.write(Paths.get(path.toString(), file.getOriginalFilename()), file.getBytes());
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
		return mapper.toDto(tmp);	//save data to database
	}
	
	public FileDto getFileById(Long id) {
		
		return mapper.toDto(fileRepo.findById(id).get());
	}
	
	public List<FileDto> getFiles() {
		
		return fileRepo.findAll().stream().map(mapper::toDto).collect(Collectors.toList());	
	}
	
	public FileDto updateFileById(FileDto file, Long id) {
		file.setId(id);
		return mapper.toDto(fileRepo.save(mapper.toFile(file)));	
	}
	
	public FileDto deleteFileById(Long id) {//returns null if failed returns deleted entry if successfull
		
		FileEntity tmp = null;//temp for returning
		
		if(fileRepo.findById(id) == null) //if id is not there return null for failed
			return mapper.toDto(tmp);
		
		tmp = fileRepo.findById(id).get();//get the entry to return
//		FolderEntity folder = folderRepository.getByLocation(tmp.getLocation());
		fileRepo.deleteById(id);//delete the entry
		
		Path path = Paths.get(tmp.getLocation(), tmp.getName()).toAbsolutePath();
		
		try {
			Files.delete(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.println(path.toString());
		return mapper.toDto(tmp);//return deleted entry
		
	}
	
	
	
	
	
	
}


