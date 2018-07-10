package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.entity.FileEntity;
import com.cooksys.dto.FileDto;
@Mapper(componentModel = "spring")
public interface FileMapper {
	FileDto toDto(FileEntity entity);
	FileEntity toFile(FileDto dto);
}
