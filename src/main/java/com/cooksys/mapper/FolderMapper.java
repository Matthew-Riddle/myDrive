package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.dto.FolderDto;
import com.cooksys.entity.FolderEntity;

@Mapper(componentModel = "spring")
public interface FolderMapper {
	FolderDto toDto(FolderEntity entity);
	FolderEntity toFolder(FolderDto dto);
}
