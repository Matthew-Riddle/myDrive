package com.cooksys.mydrive.service;
import java.util.List;
import java.util.stream.Collectors;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.stereotype.Service;

//import com.cooksys.mydrive.dto.FileDto;
import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;

@Service
public class FolderService {
	private FolderRepository folderRepository;
	private FileRepository fileRepository;
	public FolderService(FolderRepository folderRepository, FileRepository fileRepository, FileMapper fileMapper) {// 
		this.folderRepository = folderRepository;
		this.fileRepository = fileRepository;
	}
	
	public FolderEntity createFolder(FolderEntity theFolder) {
		
		Path path = Paths.get("./storage", theFolder.getName());		
		if(!Files.exists(path.toAbsolutePath())) {
			try {
				Files.createDirectories(path);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		theFolder.setId(null);
		theFolder.setDeleted(false);
		theFolder.setLocation(path.toString());
		
		Long reID = folderRepository.save(theFolder).getId();
		return folderRepository.getOne(reID);
	}
	
	public List<FolderEntity> getFolders() { //.map(folderMapper::toDto)
		return folderRepository.findAll().stream().collect(Collectors.toList());
	}
	
	public FolderEntity getFolderById(Long id) {
		return folderRepository.getOne(id);
	}
	
	public Long addFileToFolder(Long fileId, Long folderId) {
		FolderEntity myFolder = folderRepository.getOne(folderId);
		List<FileEntity> newFiles = myFolder.getFiles();
		newFiles.add(fileRepository.getOne(fileId));
		myFolder.setFiles(newFiles);
		folderRepository.save(myFolder);
		return folderId;
	}
	
	public FolderEntity getFolderByName(String name) {
		List<FolderEntity> workingList = folderRepository.findByName(name);
		if(!workingList.isEmpty()) {
			return workingList.get(0);
		}
		else {
			return null;
		}
	}
	
	public FolderEntity updateFolder(FolderEntity updateFolder, Long id) {
		// TODO: Add functionality for updating file system when called.
		updateFolder.setId(id);
		folderRepository.save(updateFolder);
		return updateFolder;
	}
	
	public List<FileEntity> getFilesOfFolder(Long id) {
		return folderRepository.getOne(id).getFiles().stream().collect(Collectors.toList());
	}
	
	public FolderEntity deleteFolder(Long id) {
		
		// TODO: Add functionality for updating file system when called.
		FolderEntity deletedFolder = folderRepository.getOne(id);
		if(deletedFolder.isDeleted()) {	
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					this.deleteFileById(containedFile.getId());
			}
			
			folderRepository.deleteById(deletedFolder.getId());
			Path path = Paths.get(deletedFolder.getLocation()//, tmp.getName()
					).toAbsolutePath();
			try {
				//Files.delete(path);
				FolderService.deleteDirectory(path.toFile());
			} catch (IOException e) {
				e.printStackTrace();
			}
			deletedFolder.setName(deletedFolder.getName() + " was deleted.");
			return deletedFolder;
		}
		else {
			deletedFolder.setDeleted(true);
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					containedFile.setDeleted(true);
					fileRepository.save(containedFile);			
			}
			folderRepository.save(deletedFolder);
			return deletedFolder;
		}
		
	}
    
	public static boolean deleteDirectory(File dir) throws IOException {
        if (dir.isDirectory()) {
            File[] children = dir.listFiles();
            for (int i = 0; i < children.length; i++) {
                boolean success = deleteDirectory(children[i]);
                if (!success) {
                    return false;
                }
            }
        }
        return dir.delete();
    }
    
	public FileEntity deleteFileById(Long id) {//returns null if failed returns deleted entry if successfull
		FileEntity tmp = null;//temp for returning
		if(fileRepository.findById(id) == null) //if id is not there return null for failed
			return tmp;
		tmp = fileRepository.findById(id).get();//get the entry to return
		fileRepository.deleteById(id);//delete the entry
		Path path = Paths.get(tmp.getLocation(), tmp.getName()).toAbsolutePath();
		try {
			Files.delete(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		//System.out.println(path.toString());
		return tmp;//return deleted entry
	}
}