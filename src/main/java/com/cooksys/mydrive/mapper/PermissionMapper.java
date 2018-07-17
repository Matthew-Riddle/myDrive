package com.cooksys.mydrive.mapper;

import org.mapstruct.Mapper;

import com.cooksys.mydrive.dto.PermissionDto;
import com.cooksys.mydrive.entity.PermissionEntity;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
	PermissionDto toDto(PermissionEntity entity);
	PermissionEntity toPerm(PermissionDto dto);
}

