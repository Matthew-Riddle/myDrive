package com.cooksys.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.FileDto;
import com.cooksys.dto.FolderDto;
import com.cooksys.service.FolderService;

@RestController
@RequestMapping("folder")
public class FolderController {
	
	private FolderService folderService;
	
	public FolderController(FolderService folderService) {
		this.folderService = folderService;
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
		return folderService.createFolder(folder);
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
