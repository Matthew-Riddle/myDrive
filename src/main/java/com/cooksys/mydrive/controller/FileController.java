package com.cooksys.mydrive.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.service.FileService;

@RestController
@RequestMapping("files")
public class FileController {
	
	private FileService fileService;
	
	public FileController(FileService fileService) {
		this.fileService = fileService;
	}
	
	@GetMapping
	public List<FileDto> getAll() {
		return fileService.getFiles();
	}
	
	@GetMapping("{id}")
	public FileDto get(@PathVariable Long id) {
		return fileService.getFileById(id);
	}
	
	@PostMapping
	public FileDto createNewFile(@RequestBody MultipartFile file, @RequestParam(required = false) String location) {
		return fileService.createFile(file, location);
	}
	
	@PutMapping("{id}")
	public FileDto updateFile(@RequestBody FileDto file, @PathVariable Long id) {
		return fileService.updateFileById(file, id);
	}
	
	@DeleteMapping("{id}")
	public FileDto deleteFile(@PathVariable Long id) {
		return fileService.deleteFileById(id);
	}
	
	@ControllerAdvice
	class GlobalControllerExceptionHandler {
	    @ResponseStatus(value = HttpStatus.PAYLOAD_TOO_LARGE)
	    @ExceptionHandler(MultipartException.class)
	    public void handleMultipart(MultipartException exception) {
	        //dont do anything
	    }
	}
}
