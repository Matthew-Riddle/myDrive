package com.cooksys.mydrive.service;
import java.util.List;
import java.util.stream.Collectors;

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

	public FolderDto createFolder(FolderDto folderDto) {
		folderDto.setId(null);
		folderDto.setDeleted(false);
		Long reID = folderRepository.save(folderMapper.toFolder(folderDto)).getId();
		return folderMapper.toDto(folderRepository.getOne(reID));
	}
	
	public List<FolderDto> getFolders() {
		return folderRepository.findAll().stream().map(folderMapper::toDto).collect(Collectors.toList());
	}
	
	public FolderDto getFolderById(Long id) {
		return folderMapper.toDto(folderRepository.getOne(id));
	}
	
	public FolderDto updateFolder(List<FileDto> updateFiles, Long id) {
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
		for(FileEntity containedFile : deletedFolder.getFiles()) {
			containedFile.setDeleted(true);
			fileRepository.save(containedFile);
		}
		deletedFolder.setDeleted(true);
		folderRepository.save(deletedFolder);
		return folderMapper.toDto(deletedFolder);
	}
	//public List<FolderDto> getFoldersOfFolder(Long id) {
	//	return folderRepository.getOne(id).getFolders().stream().map(folderMapper::toDto).collect(Collectors.toList());
	//}
}
