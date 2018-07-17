package com.cooksys.mydrive.service;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cooksys.mydrive.entity.FileEntity;
import com.cooksys.mydrive.entity.FolderEntity;
import com.cooksys.mydrive.mapper.FileMapper;
import com.cooksys.mydrive.repository.FileRepository;
import com.cooksys.mydrive.repository.FolderRepository;

@Service
public class FolderService {
	public static class ZipDir extends SimpleFileVisitor<Path> {
	    private static ZipOutputStream zos;
	    private static Path sourceDir;
	    public ZipDir(Path sourceDir) {
	    	ZipDir.sourceDir = sourceDir;
	    }
	    @Override
	    public FileVisitResult visitFile(Path file,
	            BasicFileAttributes attributes) {
	        try {
	            Path targetFile = sourceDir.relativize(file);
	            zos.putNextEntry(new ZipEntry(targetFile.toString()));	 
	            byte[] bytes = Files.readAllBytes(file);
	            zos.write(bytes, 0, bytes.length);
	            zos.closeEntry();
	        } catch (IOException ex) {
	            System.err.println(ex);
	        }
	        return FileVisitResult.CONTINUE;
	    }
	 
	    public static ByteArrayOutputStream lame(String[] args) {
	        String dirPath = args[0];
	        ZipDir.sourceDir = Paths.get(dirPath);
			ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			zos = new ZipOutputStream(byteArrayOutputStream);
			return byteArrayOutputStream;
	    }
	    
	    public static void myThings() throws IOException {
	    	Files.walkFileTree(ZipDir.sourceDir, new ZipDir(ZipDir.sourceDir));
	    	zos.close();
	    }
	}
	
	private FolderRepository folderRepository;
	private FileRepository fileRepository;
	
	public FolderService(FolderRepository folderRepository, FileRepository fileRepository, FileMapper fileMapper) {// 
		this.folderRepository = folderRepository;
		this.fileRepository = fileRepository;
	}
	
	public FolderEntity createFolder(FolderEntity theFolder) {
		Path path = Paths.get("./storage", theFolder.getName());		
		if(!Files.exists(path)) {
			try {
				Files.createDirectories(path);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		theFolder.setId(null);
		theFolder.setDeleted(false);
		theFolder.setLocation(theFolder.getName());
		
		Long reID = folderRepository.save(theFolder).getId();
		return folderRepository.getOne(reID);
	}
	
	public List<FolderEntity> getFolders() {
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
		updateFolder.setId(id);
		FolderEntity tempFolder = folderRepository.getOne(id);
		
		Path path = Paths.get("./storage", tempFolder.getLocation());
		File origDir = path.toFile();
		File newDir = new File(origDir.getParent() + "\\" + updateFolder.getName());
		if(!updateFolder.getName().equals( tempFolder.getName())) {
			
			origDir.renameTo(newDir);
			try {
				FolderService.deleteDirectory(path.toFile());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		else {
			System.out.println("Not renaming directory!");
		}
		updateFolder.setLocation(updateFolder.getName());
		List<FileEntity> newFiles = new ArrayList<FileEntity>();
		updateFolder.setFiles(new ArrayList<FileEntity>());
		updateFolder = folderRepository.save(updateFolder);
		List<FileEntity> greatFiles = tempFolder.getFiles();
		tempFolder.setFiles(new ArrayList<FileEntity>());
		folderRepository.save(tempFolder);
		for(FileEntity workingFile : greatFiles) {
			FileEntity realWorking = fileRepository.getOne(workingFile.getId());
			realWorking.setDeleted(updateFolder.isDeleted());
			realWorking.setFolder(updateFolder);
			newFiles.add(realWorking);
			fileRepository.save(realWorking);
		}
		updateFolder.setFiles(newFiles);
		folderRepository.save(updateFolder);		
		return folderRepository.getOne(updateFolder.getId());
	}
	
	public List<FileEntity> getFilesOfFolder(Long id) {
		return folderRepository.getOne(id).getFiles().stream().collect(Collectors.toList());
	}
	
	public ResponseEntity<Resource> downloadFilesByFolderId(Long id){
		FolderEntity folder = folderRepository.findById(id).get();
		String zipName = folder.getLocation();
		HttpHeaders headers = new HttpHeaders();
        String[] haha = new String[1];
        haha[0] = Paths.get("./storage", zipName).toString();
        ByteArrayOutputStream myMan = ZipDir.lame(haha);
        try {
			ZipDir.myThings();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
        byte[] hahar = myMan.toByteArray();
        long someSize = 0 ;
        someSize = hahar.length;
		InputStreamResource resource;
		resource = new InputStreamResource(new ByteArrayInputStream(hahar));
		return ResponseEntity.ok()
		        .headers(headers)
		        .contentLength(someSize)
		        .contentType(MediaType.parseMediaType("application/x-zip-compressed"))
		        .body(resource);
	}
	
	public FolderEntity deleteFolder(Long id) {		
		FolderEntity deletedFolder = folderRepository.getOne(id);
		if(deletedFolder.isDeleted()) {	
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					this.deleteFileById(containedFile.getId());
			}
			folderRepository.deleteById(deletedFolder.getId());
			Path path = Paths.get("./storage", deletedFolder.getLocation());
			try {
				FolderService.deleteDirectory(path.toFile());
			} catch (IOException e) {
				e.printStackTrace();
			}
			deletedFolder.setName(deletedFolder.getName() + " was deleted.");
			return deletedFolder;
		}
		else {
			deletedFolder.setDeleted(true);
			System.out.println(deletedFolder.getFiles().size());
			System.out.println("deleting files of a folder");
			for(FileEntity containedFile : deletedFolder.getFiles()) {
					System.out.println("Deleting file named " + containedFile.getName());
					FileEntity actualFile = fileRepository.getOne(containedFile.getId());
					actualFile.setDeleted(true);
					fileRepository.save(actualFile);			
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
		Path path = Paths.get("./storage", tmp.getLocation());//.toAbsolutePath();
		try {
			Files.delete(path);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return tmp;//return deleted entry
	}
}