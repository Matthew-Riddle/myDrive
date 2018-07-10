package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.FileEntity;

public interface FileRepository extends JpaRepository<FileEntity, Long>{

}
