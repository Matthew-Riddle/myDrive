package com.cooksys.mydrive.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;

public interface FolderRepository extends JpaRepository<FolderEntity, Long>{
<<<<<<< HEAD
	List<FolderEntity> findByName(String Name);

	FolderEntity getByLocation(String location);
=======
	List<FolderEntity> findByName(String name);
>>>>>>> 0baabead6dbe3531af9fc661bb47623c9900f765
}
