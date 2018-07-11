package com.cooksys.mydrive.mapper;

import org.mapstruct.Mapper;

import com.cooksys.mydrive.dto.FolderDto;
import com.cooksys.mydrive.entity.FolderEntity;

@Mapper(componentModel = "spring")
public interface FolderMapper {
	FolderDto toDto(FolderEntity entity);
	FolderEntity toFolder(FolderDto dto);
}
