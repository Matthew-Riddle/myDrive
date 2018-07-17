package com.cooksys.mydrive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long>{

}