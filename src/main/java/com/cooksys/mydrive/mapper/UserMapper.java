package com.cooksys.mydrive.mapper;

import org.mapstruct.Mapper;

import com.cooksys.mydrive.dto.UserDto;
import com.cooksys.mydrive.entity.UserEntity;

@Mapper(componentModel = "spring")
public interface UserMapper {
	UserDto toDto(UserEntity entity);
	UserEntity toUser(UserDto dto);
}
