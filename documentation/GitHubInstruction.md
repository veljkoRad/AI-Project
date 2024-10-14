* "clear" da obrise celu istoriju terminala
* Git allows multiple users to work on a project concurrently, manage changes, and track the history of modifications.

##  Git Windows Installation

* To check is it installed  ```git --version```
* Addig info that will go with **commits**
    * git config --global user.name "Veljko"
    * git config --global user.email "radivojevicveljko@gmail.com"
    
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
* ```git log``` details about  commits: commit ID, Author, Date, commit name
    * when enter git log now I cannot type anything in terminal because IM navigating commits (up and down arrow).
    * to finish navigatin press ```q```

## GitHub Instalation
* Git remote is actualy that folder where I put this project(AI-Project.git)
*  ```git remote -v``` checks if there is installed get remote in pc.
* Add new remote to my project which has git repository
    * ```git remote add origin git@github.com:veljkoRad/AI-Project.git```
* rename remote
    * ```git remote rename origin ai-site```
* if installed this is what I get:
    ```
    origin  git@github.com:veljkoRad/AI-Project.git (fetch)
    origin  git@github.com:veljkoRad/AI-Project.git (push)
    ```
    * **origin* is default remote nameg
* ```git push origin master``` to push from master branch to remote origin
* before first push I must make mu security check
    *  in same terminal that i use i type:
    * Check for an Existing SSH Key
        * ```ls ~/.ssh```
    * create new ssh key:
        * ssh-keygen -t ed25519 -C "radivojevicveljko@gmail.com"
    * check my ssh key
        * ```cat ~/.ssh/id_ed25519.pub```
        * ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGLIe10TJ94C9H3KdfHiHi9c/3O6LWPfUdkkojcWzzVI your-email@example.com
    * go to github => settings => ssh keys => add new key, paste my ssh key and give title like "My laptop Key" and for work "Job PC Key"






