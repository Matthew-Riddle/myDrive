package com.cooksys.mydrive.entity;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.web.multipart.MultipartFile;

@Entity
public class FileEntity {

	@Id
	@GeneratedValue
	private Long id;
	@ManyToOne
	private FolderEntity folder;
	private String location;
	private String name;
	private byte[] contents;
	private boolean deleted;
	

	private boolean empty;
	private long fileSize;
	private String contentType;
	public void setEmpty(boolean empty) {
		this.empty = empty;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
	
	public long getFileSize() {
		return fileSize;
	}

	public void setFileSize(long fileSize) {
		this.fileSize = fileSize;
	}
	
	public byte[] getContents() {
		return contents;
	}

	public void setContents(byte[] contents) {
		this.contents = contents;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public FolderEntity getFolder() {
		return folder;
	}

	public void setFolder(FolderEntity folder) {
		this.folder = folder;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FileEntity other = (FileEntity) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	public byte[] getBytes(){
		return contents;
	}

	public String getContentType() {
		return contentType;
	}

	public String getOriginalFilename() {
		return name;
	}
	
	public long getSize() {
		return fileSize;
	}
	
	public boolean isEmpty() {
		return empty;
	}
	
}
