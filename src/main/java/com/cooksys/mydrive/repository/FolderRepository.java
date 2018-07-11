package com.cooksys.mydrive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.mydrive.entity.FolderEntity;

public interface FolderRepository extends JpaRepository<FolderEntity, Long>{

}
