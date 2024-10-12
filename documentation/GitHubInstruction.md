* "clear" da obrise celu istoriju terminala
* Git allows multiple users to work on a project concurrently, manage changes, and track the history of modifications.

##  Git Windows Installation

* To check is it installed  ```git --version```
* Addig info that will go with **commits**
    * git config --global user.name "Your Name"
    * git config --global user.email "your@email.com"
    
* in terminal go to location of project which you want to put on github
* ```git init```  (install local repository in this folder )
* **Staging Area**: A place where changes are recorded before they become part of a commit.
    * ```git add Index.html``` add one file to stage
    * ```git add .``` -add all files and folders that are included in this folder
* **Commit**: A saved snapshot of the files at a specific moment, with a unique ID.
    * ```git commit -m "first project commit"```
* ```git status``` there are three results after I enter this comand:
    1. ```Changes not staged for commit:``` this files needs to add to stage area
    2. ```Changes to be committed:``` this files need to commit
    3. ```nothing to commit, working tree clean``` - everything is ready for posting on github
* ```git log``` details about last commit: commit ID, Author, Date, commit name

## GitHub Instalation

*  ```git remote -v``` checks if there is installed get remote in pc.
* if installed this is what I get:
    ```
    origin  git@github.com:veljkoRad/AI-Project.git (fetch)
    origin  git@github.com:veljkoRad/AI-Project.git (push)
    ```





