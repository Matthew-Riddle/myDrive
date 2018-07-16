package com.cooksys.mydrive.mapper;

import org.mapstruct.Mapper;

import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.entity.FileEntity;

@Mapper(componentModel = "spring")
public interface FileMapper {
	FileDto toDto(FileEntity entity);
	FileEntity toFile(FileDto dto);
}
