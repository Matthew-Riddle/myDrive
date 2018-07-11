package com.cooksys.mydrive.dto;

public class FolderDto {
	
	private Long folder_id;
	
	private String location;
	
	private String name;
	
	private Boolean is_deleted;

	public Long getFolder_id() {
		return folder_id;
	}

	public void setFolder_id(Long folder_id) {
		this.folder_id = folder_id;
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

	public Boolean getIs_deleted() {
		return is_deleted;
	}

	public void setIs_deleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((folder_id == null) ? 0 : folder_id.hashCode());
		result = prime * result + ((is_deleted == null) ? 0 : is_deleted.hashCode());
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		FolderDto other = (FolderDto) obj;
		if (folder_id == null) {
			if (other.folder_id != null)
				return false;
		} else if (!folder_id.equals(other.folder_id))
			return false;
		if (is_deleted == null) {
			if (other.is_deleted != null)
				return false;
		} else if (!is_deleted.equals(other.is_deleted))
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}
