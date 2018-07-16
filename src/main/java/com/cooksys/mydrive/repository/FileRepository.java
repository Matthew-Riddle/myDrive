package com.cooksys.mydrive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.mydrive.entity.FileEntity;

public interface FileRepository extends JpaRepository<FileEntity, Long>{

}
