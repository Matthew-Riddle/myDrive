package com.cooksys.mydrive.service;

import org.springframework.stereotype.Service;

import com.cooksys.mydrive.dto.UserDto;
import com.cooksys.mydrive.entity.UserEntity;
import com.cooksys.mydrive.mapper.UserMapper;
import com.cooksys.mydrive.repository.UserRepository;

@Service
public class UserService {
	
	private UserRepository userRepository;
	private UserMapper userMapper;
	
	public UserService(UserRepository userRepo, UserMapper userMapper) {

		this.userMapper = userMapper;
		this.userRepository = userRepo;
		
	}
	
	public Long addUser(String userName, String pass) {
		UserEntity user = new UserEntity();
		
		user.setId(null);
		user.setPassword(pass);
		user.setPermissions(null);
		user.setUserName(userName);
		

		return userRepository.save(user).getId();
		
	}
	
	public UserDto getUserById(Long id) {
		return userMapper.toDto(userRepository.findById(id).get());
	}
	
	public Long deleteUserById(Long id) {
		userRepository.deleteById(id);
		return id;
	}
	
	public Long updatePasswordById(Long id, String password) {
		UserEntity user = userRepository.findById(id).get();
		
		user.setPassword(password);
		userRepository.save(user);
		
	
		return id;
	}
	
	public Long updateUserNameById(Long id, String userName) {
		UserEntity user = userRepository.findById(id).get();
		
		user.setUserName(userName);
		userRepository.save(user);
		
	
		return id;
	}
}
