package com.cooksys.mydrive.service;

import com.cooksys.mydrive.dto.PermissionDto;
import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.entity.UserEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.mapper.PermissionMapper;
import com.cooksys.mydrive.mapper.UserMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;
import com.cooksys.mydrive.repository.PermissinoRepository;
import com.cooksys.mydrive.repository.UserRepository;

public class PermissionService {

	PermissinoRepository perRepo;
	PermissionMapper perMapper;
	FileRepository fileRepo;
	FileMapper mapper;
	FileRepository fileRepository;
	FolderRepository folderRepository;
	UserRepository userRepo;
	UserMapper userMapper;
	
	public PermissionService(PermissinoRepository perRepo, PermissionMapper perMapper, UserRepository userRepo, UserMapper userMapper, FileRepository fileRepo, FileMapper fileMapper, FileRepository fileRepository, FolderRepository folderRepository) {

		this.perMapper = perMapper;
		this.perRepo = perRepo;
		this.fileRepo = fileRepo;
		mapper = fileMapper;
		this.fileRepository = fileRepository;
		this.folderRepository = folderRepository;
		this.userRepo = userRepo;
		this.userMapper = userMapper;
	}
	
	public Long createPerm(PermissionDto perm) {
		
		FileEntity file = fileRepo.findById(perm.getFileId()).get();
		FolderEntity folder = folderRepository.findById(perm.getFolderId()).get();
		UserEntity user = userRepo.findById(perm.getUserId()).get();
		
		return perm.getId();
		
	}
}
