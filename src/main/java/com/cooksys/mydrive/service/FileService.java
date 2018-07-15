package com.cooksys.mydrive.service;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
		if(location == null) {
			path = Paths.get("./storage");//if location is not passed save in root
			if(!Files.exists(path))
				try {
					Files.createDirectories(path);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
		else
			path = Paths.get("./storage", location); //if a location is given add it to the directory path
		
		FileEntity tmp = new FileEntity();//make a temp to send to the database
		
		tmp.setName(file.getOriginalFilename());//fill the temp with info from the multi
		tmp.setId(null);
		tmp.setLocation(location != null ? location : null);
		tmp.setDeleted(false);
		tmp.setFileSize(file.getSize());
		tmp.setContentType(file.getContentType());
		

		if(!Files.exists(path) || Files.exists(Paths.get(path.toString(), file.getOriginalFilename())) ) {
			System.out.println("error");
			return null;//errors if it does not exhist
		}
		
		if(location != null) {
			FolderEntity asdf = folderRepository.getByLocation(location);
			tmp.setFolder(asdf);
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
		
		if(!tmp.getDeleted()) {//checks if file has been deleted once if not set deleted to true save and return			

			tmp.setDeleted(true);
			fileRepo.save(tmp);
			return mapper.toDto(tmp);
		}
		

		if(tmp.getLocation() != null) {//if the location is null then its in root if its not null then get the folder info that its in
			FolderEntity folder = folderRepository.getByLocation(tmp.getLocation());//use get by location
			folder.deleteFile(id);//delete the file from the list of files
			folderRepository.save(folder);//save it
		}
		
		Path path = null;
		
		fileRepo.deleteById(id);//delete the file
		if(tmp.getLocation() == null) //set up the path to the file on the file system
			path = Paths.get("./storage", tmp.getName());
		else 
			path = Paths.get("./storage", tmp.getLocation(), tmp.getName());
		
		try {
			Files.delete(path);//delete the file
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return mapper.toDto(tmp);//return the file deleted
		
	}

	public ResponseEntity<Resource> downloadById(Long id) {
		FileEntity file = fileRepo.findById(id).get();
		Path path = null;
		HttpHeaders headers = new HttpHeaders();
		if(file.getLocation() == null)
			path = Paths.get("./storage", file.getName());
		else
			path = Paths.get("./storage", file.getLocation(), file.getName());

	
		   InputStreamResource resource;
		try {
			resource = new InputStreamResource(new FileInputStream(path.toString()));
		    return ResponseEntity.ok()
		            .headers(headers)
		            .contentLength(file.getFileSize())
		            .contentType(MediaType.parseMediaType(file.getContentType()))
		            .body(resource);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


		return null;
		
	
	}
	
	
	
	
	
	
	
}


