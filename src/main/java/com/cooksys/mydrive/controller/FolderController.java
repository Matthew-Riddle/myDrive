package com.cooksys.mydrive.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.mydrive.dto.FolderDto;
import com.cooksys.mydrive.mapper.FolderMapper;
import com.cooksys.mydrive.service.FolderService;

@RestController
@RequestMapping("folder")
public class FolderController {
	private FolderMapper folderMapper;
	private FolderService folderService;
	public FolderController(FolderService folderService, FolderMapper folderMapper) {
		this.folderService = folderService;
		this.folderMapper = folderMapper;
	}
	
	@CrossOrigin
	@GetMapping
	public List<FolderDto> getAll(){
		//List<FileEntity> theFiles = updateFiles.stream().map(fileMapper::toFile).collect(Collectors.toList());
		return folderService.getFolders().stream().map(folderMapper::toDto).collect(Collectors.toList());
	}
	
	@CrossOrigin
	@GetMapping("{id}")
	public FolderDto get(@PathVariable Long id) {
		return folderMapper.toDto(folderService.getFolderById(id));
	}
	
	@CrossOrigin
	@PostMapping
	public FolderDto createNewFolder(@RequestBody FolderDto folder) {
		return folderMapper.toDto(folderService.createFolder(folderMapper.toFolder(folder)));
	}
	
	@CrossOrigin
	@PutMapping("{id}")
	public FolderDto updateFolder(@RequestBody FolderDto changeFolder, @PathVariable Long id) {
		return folderMapper.toDto(folderService.updateFolder(folderMapper.toFolder(changeFolder), id));
	}
	
	@CrossOrigin
	@DeleteMapping("{id}")
	public FolderDto deleteFolder(@PathVariable Long id) {
		return folderMapper.toDto(folderService.deleteFolder(id));
	}
	
}
