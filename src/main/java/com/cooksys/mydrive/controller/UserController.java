package com.cooksys.mydrive.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.mydrive.mapper.UserMapper;
import com.cooksys.mydrive.service.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	UserService userService;
	UserMapper userMapper;
	public UserController(UserService userService, UserMapper userMapper) {
		this.userService = userService;
		this.userMapper = userMapper;
	}
	
	
	@CrossOrigin
	@PostMapping
	public Long createNewUser(@RequestParam String userName, @RequestParam String password) {
		return userService.addUser(userName, password);
	}
	
	
	@CrossOrigin
	@PostMapping("/login")
	public Boolean logIn(@RequestParam String userName, @RequestParam String password) {
		
		return userService.logIn(userName, password);
	}
	
	
	
	
	
}
