package com.cooksys.mydrive.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.mapper.FolderMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;
import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.dto.FolderDto;
import com.cooksys.mydrive.mapper.FolderMapper;
import com.cooksys.mydrive.service.FolderService;

@RestController
@RequestMapping("folder")
public class FolderController {
	private FolderMapper folderMapper;
	public FolderController(FolderMapper folderMapper) {// 
		this.folderMapper = folderMapper;
	}
	private FolderService folderService;
	private FolderMapper folderMapper;
	
	public FolderController(FolderService folderService, FolderMapper folderMapper) {
		this.folderService = folderService;
		this.folderMapper = folderMapper;
	}
	
	@GetMapping
	public List<FolderDto> getAll(){
		return folderService.getFolders();
	}
	
	@GetMapping("{id}")
	public FolderDto get(@PathVariable Long id) {
		return folderService.getFolderById(id);
	}
	
	@PostMapping
	public FolderDto createNewFolder(@RequestBody FolderDto folder) {
		return folderService.createFolder(folderMapper.toFolder(folder));
	}
	
	@PutMapping("{id}")
	public FolderDto updateFolder(@RequestBody List<FileDto> file, @PathVariable Long id) {
		return folderService.updateFolder(file, id);
	}
	
	@DeleteMapping("{id}")
	public FolderDto deleteFolder(@PathVariable Long id) {
		return folderService.deleteFolder(id);
	}

}
