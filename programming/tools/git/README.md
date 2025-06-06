# [`git`](https://git-scm.com/book/en/v2)
## `git config`
### [Config variables](https://git-scm.com/docs/git-config#_variables)
#### `core.pager`
`less` is the default *pager* => the search function when using, e.g. `git log -p`, in interactive mode is the search function of `less`

## Tags
### 20211103 Question: I would like to get the source code of a specific release from github
Answer: https://stackoverflow.com/questions/791959/download-a-specific-tag-with-git
### list all remote tags (20240129)
`git ls-remote --tags`
This command can be remembered together with `git branch`, where `git branch -r` list all remote branches

## `git stash`
### `git stash` Stashes Only the **Local Changes on the Current Branch**
### How to redo the `stash` i.e. turn the stashed code back
`git stash apply`

### `git stash push -m "message here"`
stash with message so that it is more tractable with command `git stash list`


## Cheat Sheet
### 20190613: Git Basic Video Tutorial
https://www.youtube.com/watch?v=HRR8xcTmpe4

### 20190614: Revert the Last Commit

Reference: 
* [How to delete a git commit from log like it had never existed](https://stackoverflow.com/questions/8901542/how-to-delete-a-git-commit-from-log-like-it-had-never-existed)
* [Deleting a git commit](https://www.clock.co.uk/insight/deleting-a-git-commit)

### 20190618:
#### HEADs Indicates a Local Branch You are Currently on

Reference: [Don't Mess With the Master Working with Branches in `git` and *github*](https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/)

`merge` a *conflict* does not generate an automatic *commit* message

### 20190624: 
#### Display the current HEAD
`git rev-parse HEAD`

#### **Practical Work Approach in a Development Team with multiple Developers Working on Merely One Branch - Master**: 
1. work on a local branch created from master, commit on the local branch
2. switch to the local master branch to *sync* it from the *remote*
3. switch back to the local branch and `git rebase master`
4. `git push origin master` or with *refspec* `git push origin HEAD:refs/heads/master` on the current branch

#### push a local branch to a remote `origin` branch with another name
Example: `git push origin change_20190624:master` - push the local branch `change_20190624` to remote origin `master`


### 20190626
#### List *references*
##### List references available in a remote repository
`git ls-remote`
###### list all remote tags (20240129)
`git ls-remote --tags`
This command can be remembered together with `git branch`, where `git branch -r` list all remote branches

##### List references available in a local repository 
`git show-ref`

### 20190627
* add only modified files, meaning untracked files will not be added: `git add -u`
* add all files: `git add -A`




### 20191019
#### [Git States Control Flow](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
![Git States Control Flow](https://git-scm.com/book/en/v2/images/lifecycle.png)
#### `git diff --cached` Compares the *Unmodified* Files with *Staged* Files



### 20191121
#### Limit of Using Wildcard (\*) with `git add`
Assuming there are the following files:
  * `git/dir/a.java`
  * `git/dir/b.java`
  * `git/dir/c.java`
  * `git/dir/a.swp`
  * `git/dir/b.swp`
  * `git/dir/subdir/d.java`
  * `git/dir/subdir/e.java`

`git add git/dir/*.java` does not work recursively, meaning the files in `git add git/dir/subdir` will not be successfully added. Whereas the `git add git/dir/*` will add all the files inside `git/dir` recursively, but the files with extension `.swp` are not planned to be added at all

### 20191126
**Problem:** I committed 3 files and pushed them to Gerrit, one of which should not be pushed, meaning that file was pushed by mistake

**Question:** How to revert the commit and push only the two files

**Solution:** 

1. `git log` to get the commit history, remember the commit ID before my last commit
2. `git checkout <commit_hash> -- <file>` will revert the committed file, of course your changes on this file will be lost 

#### Command to Create new Branch
`git checkout -b <new_branch>`

> Create a new branch named <new_branch> and start it at <start_point>

NOTE! This command also switches to the created branch automatically
Then stage, aka. `add`, and `commit` new files will go to the new branch

#### Meaning of *start it at <start_point>*

The meaning of *<start_point>*:

> The name of a commit at which to start the branch


**Git in Practice**: The name of the branch should be descriptive, for instance, it can be the name of the task you are working on. Moreover, if you have multiple tasks, you can create multiple branches as per tasks  
### Command to Go to Another Branch
`git checkout <another_branch>`


### Reload/sync a Single File from a commit
`git checkout <commit_hash> -- <paths>`
### Revert One or More Files from *Modified* (`committed`) to *Unmodified*
`git checkout -- <paths>`

## 20200103
### *Gerrit* in Practice
When the code is not ready for review, push as DRAFT

## 20200321
### Operation on Remote Repository
#### I pushed a commit to my remote repository, but I want to *adandon* it
Reference: http://christoph.ruegg.name/blog/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html

Solution: `git pust origin +<last_commit_hash>^:master`

* `origin` is the remote repository, in case of other remote repository, change it
* `master` is the remote branch, where the previous commit was pushed to
* remember the `+` sign there

### Git Term: [*fast-forward*](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)


## 20200902
### [`git mergetool -t gvimdiff`](https://vim.fandom.com/wiki/A_better_Vimdiff_Git_mergetool)

## 20201204
**Problem**: There are lots of unnecessary *untracked* files in my master branch, I would like to remove them all

**Solution**: ``git clean -f`

Reference: https://koukia.ca/how-to-remove-local-untracked-files-from-the-current-git-branch-571c6ce9b6b1

## 20210617 `diff` and `difftool`
### Q: How to check local changes of a File, which is just downloaded from the remote repository 
#### Answer: `git diff <path>`
When a file is downloaded from the remote repository, the state is *Unmodified*, after modification locally, the state of the file is *Modified*, meaning before `add`. `git diff <path>` compares the file (`<path>`) changes between *Unmodified* state and *Modified* state.
### Scenario: I would like to compare a Java class file between the last commit and a commit from several months ago
#### Answer: `git diff <commit> <commit> [--] [<path>...]` or `git difftool --tool=vimdiff <commit> <commit> [--] [<path>...]`
The essence is the `diff` command, which is probably using the `diff` API from the Linux

## 20201211
### List all files or file changes in a commit
Reference: https://stackoverflow.com/questions/424071/how-to-list-all-the-files-in-a-commit

### Delete a remote *refspec* 
`git push origin :<refspec>` e.g. `git push origin :refs/heads/master`

## 202200601
Copy files from one branch to a different directory on the current branch 

## `git log`
### Diplay the log along with the diffs between the previous version and current changed version
`git log --patch` <=> `git log -p`

### 20220601,20201003
**Problem:** In my project, one specific file was suspected to be updated

**Question:** How to list the update history of a specific file

**Solution:** [`git log --follow -p -- <file>`](https://stackoverflow.com/questions/8048584/see-changes-to-a-specific-file-using-git)

### Display log graph with `--graph` option
`git log --all --oneline --graph --decorate`

NOTE! If the `--all` is not given, the displayed graph is only of the current branch

##### With different version of git, the top log is displayed differently
 Git Version  | Result
--------------|--------------------------------------------- 
`1.8.x`       | `(HEAD, origin/master, origin/HEAD, master)`
`2.7.x`+      | `(HEAD -> master, origin/master, origin/HEAD)`

##### Show logs in a pretty oneline graph with default colors and a defined date format:
`%cd` will get the date format from `--date`. For instance, the `--date=local` is very readable with year and local time: 

`git log --all --oneline --graph --date=local --pretty=format:'%C(auto) %h%d [%an/%cd] %s'`

With Human-readable date format in the following:

`git log --all --oneline --graph --date=human --pretty=format:'%C(auto) %h%d [%an/%cd] %s'`

Reference: https://git-scm.com/docs/pretty-formats
#### 20220808 display logs along with changes on files in commit
Reference: https://www.deployhq.com/git/viewing-previous-commits

### 20241214 Question:
Scenario: In a large project with tens of developers, the work practice is that all developers are working on their own feature branch and, eventually all the works are merged into the `master` branch on the cloud
Problem: some developer `git push origin --delete master` by mistake

Question: how to avoid this from occuring

## 20250409
### Question: How to list all files in a given directory of another branch from the current
`git ls-files --with-tree=<tree> ...`
