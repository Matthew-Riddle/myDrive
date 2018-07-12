package com.cooksys.mydrive.service;
import java.util.List;
import java.util.stream.Collectors;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.stereotype.Service;

import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.dto.FolderDto;
import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.mapper.FolderMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;


@Service
public class FolderService {
	private FolderRepository folderRepository;
	private FolderMapper folderMapper;
	private FileRepository fileRepository;
	private FileMapper fileMapper;
	
	public FolderService(FolderRepository folderRepository, FolderMapper folderMapper, FileRepository fileRepository, FileMapper fileMapper) {// 
		this.folderRepository = folderRepository;
		this.folderMapper = folderMapper;
		this.fileRepository = fileRepository;
		this.fileMapper = fileMapper;
	}
	
	public FolderDto createFolder(FolderEntity theFolder) {
		Path path = Paths.get("/storage", theFolder.getName());		
		if(!Files.exists(path.toAbsolutePath())) {
			try {
				Files.createDirectories(path);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		theFolder.setId(null);
		theFolder.setDeleted(false);
		Long reID = folderRepository.save(theFolder).getId();
		return folderMapper.toDto(folderRepository.getOne(reID));
	}
	
	public List<FolderDto> getFolders() {
		return folderRepository.findAll().stream().map(folderMapper::toDto).collect(Collectors.toList());
	}
	
	public FolderDto getFolderById(Long id) {
		return folderMapper.toDto(folderRepository.getOne(id));
	}
	
	public Long addFileToFolder(Long fileId, Long folderId) {
		FolderEntity myFolder = folderRepository.getOne(folderId);
		List<FileEntity> newFiles = myFolder.getFiles();
		newFiles.add(fileRepository.getOne(fileId));
		myFolder.setFiles(newFiles);
		folderRepository.save(myFolder);
		return folderId;
	}
	
	public FolderDto updateFolder(List<FileDto> updateFiles, Long id) {
		// TODO: Add functionality for updating file system when called.
		List<FileEntity> theFiles = updateFiles.stream().map(fileMapper::toFile).collect(Collectors.toList());
		fileRepository.saveAll(theFiles);
		folderRepository.getOne(id).setFiles(theFiles);
		return folderMapper.toDto(folderRepository.getOne(id));
	}
	
	public List<FileDto> getFilesOfFolder(Long id) {
		return folderRepository.getOne(id).getFiles().stream().map(fileMapper::toDto).collect(Collectors.toList());
	}
	
	public FolderDto deleteFolder(Long id) {
		FolderEntity deletedFolder = folderRepository.getOne(id);
		if(deletedFolder.isDeleted()) {	
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					fileRepository.deleteById(containedFile.getId());
			}
			folderRepository.deleteById(deletedFolder.getId());
			return null;
		}
		else {
			deletedFolder.setDeleted(true);
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					containedFile.setDeleted(true);
					fileRepository.save(containedFile);			
			}
			folderRepository.save(deletedFolder);
			return folderMapper.toDto(deletedFolder);
		}
		
	}
}
