# mydrive

A file sharing service created with [Spring Boot](https://spring.io/projects/spring-boot) and [ReactJS](https://reactjs.org/)

## Contributing

Clone the repository and make changes using the [git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow.

For example,

```
git flow init

git flow feature start #{issueNumber}-File_Controller
```

then, after making your changes, pull all changes from upstream then merge using git flow

```
git pull

git flow feature finish File_Controller
```

The naming convention for creating branches with git flow is ```#{issueNumber}-{Optional description}``` where ```issueNumber``` represents the number of the corresponding git issue and the ```Optional description``` is any string you choose to represent the issue appropriately.

When finishing a feature, bug, etc. through git-flow, the convention is to add ```[closes/fixes/resolves] #{issueNumber}``` to the end of the commit message. In our project, Closes should be used when finishing a feature, fixes when finishing a bug, and resolves for anything else.

## Specifications

* [Entity-Relationship Diagram + API endpoints](https://www.lucidchart.com/documents/edit/2e22884c-06f7-470d-a12e-ba6e028b9a74?shared=true&)

* [Component mockup](https://projects.invisionapp.com/freehand/document/fAKfkOXIf)

* [Provided MyDrive prototype](https://projects.invisionapp.com/prototype/MyDrive-cjhm3jumn003qjq01qvx47vds)

## Release v1.0.0

* Implements base requirements for project

**Users can:**
* Create a folder
* Upload a file (optionally into a folder)
* Download a file
* Download a folder as a zip
* Archive a file
* Archive a folder
* Permanently delete a file
* Permanently delete a folder
