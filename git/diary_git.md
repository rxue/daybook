# 20190612: `git pull --rebase` is equivalent to `git rebase`

**Reasoning:** In `git pull --help`, the following sentence is found:

> With `--rebase`, it runs `git rebase` instead of `git merge`

# 20190613: Git Basic Video Tutorial
https://www.youtube.com/watch?v=HRR8xcTmpe4

# 20190614: Revert the Last Commit

Reference: 
* [How to delete a git commit from log like it had never existed](https://stackoverflow.com/questions/8901542/how-to-delete-a-git-commit-from-log-like-it-had-never-existed)
* [Deleting a git commit](https://www.clock.co.uk/insight/deleting-a-git-commit)

# 20190618:
## HEADs Indicates a Local Branch You are Currently on

Reference: [Don't Mess With the Master Working with Branches in `git` and *github*](https://thenewstack.io/dont-mess-with-the-master-working-with-branches-in-git-and-github/)

# 20190622
[`git reset`](https://www.youtube.com/watch?v=QEuqlpMOL9E&list=PLXO45tsB95cKysjmSNln65YoUt9lwEl7-&index=6) (中文)
Question:
* what is `git reset --hard origin/master`

`git fetch origin` does not sync local content from the remoate origin yet, will continue to research on how this is working

`merge` a *conflict* does not generate an automatic *commit* message

# 20190624: 
## Display the current HEAD
`git rev-parse HEAD`

## Understanding on `rebase`
Assuming the current branch is `dev`, `git rebase master` will make all the commits on the current branch be based on the master branch. As a result, all the commits of the `dev` will be after all the commits of master 

## **Practical Work Approach in a Development Team with multiple Developers Working on Merely One Branch - Master**: 
1. work on a local branch created from master, commit on the local branch
2. switch to the local master branch to *sync* it from the *remote*
3. switch back to the local branch and `git rebase master`
4. `git push origin master` or with *refspec* `git push origin HEAD:refs/heads/master` on the current branch

## push a local branch to a remote `origin` branch with another name
Example: `git push origin change_20190624:master` - push the local branch `change_20190624` to remote origin `master`

## List remote
`git ls-remote`

## Delete a remote *refspec* 
`git push origin :<refspec>` e.g. `git push origin :refs/heads/master`

# 20190626
## List *references*
### List references available in a remote repository
`git ls-remote`
### List references available in a local repository 
`git show-ref`

# 20190627
* add only modified files, meaning untracked files will not be added: `git add -u`
* add all files: `git add -A`

### `git pull` is shorthand for `git fetch` followed by `git merge FETCH_HEAD`

### How to discard all the changes on the current branch
1. `git fetch origin`
2. `git reset --hard origin/master` or `git reset --hard HEAD` (revert to the last commit)

# 20191006
## `git fetch` for Sync
Before listing all branches on both local and *remote*, i.e. `git branch -a`/`git branch --all`, always remember `git fetch` to for sync beforehands

## Show logs in graphs:
`git log --pretty=format:'%h%d [%an/%ai] %s' --all --graph`

# 20190710
## `git checkout`
### Command to Create new Branch
`git checkout -b <new_branch>`
NOTE! This command also switches to the created branch automatically
Then stage, aka. `add`, and `commit` new files will go to the new branch
**Git in Practice**: The name of the branch should be descriptive, for instance, it can be the name of the task you are working on. Moreover, if you have multiple tasks, you can create multiple branches as per tasks  
## Command to Go to Another Branch
`git checkout <another_branch>`
## Reload/sync a Single File from a Remote Branch (20191008)
`git checkout <branch> -- <paths>`

# 20191019
## [Git States Control Flow](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
![Git States Control Flow](https://git-scm.com/book/en/v2/images/lifecycle.png)
## Q: How to check local changes of a File, which is just downloaded from the remote repository 
### Answer: `git diff <path>`
When a file is downloaded from the remote repository, the state is *Unmodified*, after modification locally, the state of the file is *Modified*, meaning before `add`. `git diff <path>` compares the file (`<path>`) changes between *Unmodified* state and *Modified* state.
## `git diff --cached` Compares the *Unmodified* Files with *Staged* Files

# 20191028
## `git stash` Stashes Only the **Local Changes on the Current Branch**
## Recover the `stash`ed changes
`git stash apply`
