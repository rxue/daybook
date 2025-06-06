# [Shell *built-in* commands](https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html)

Built-in commands are executed without invoking another program

Each shell has its own built-in commands. But for instance, between Bash and Zsh, most built-in commands are the same, but options might still differ. 

For instance, the options of `history` commands in Bash are different from those in Zsh

NOTE! `which` command can tell whether the quetioned command is built-in or not explicitly (20250330)

# boolean operation
Advanced use case of `&&` in combination with `&`
`branch=test && (git branch -D $branch & git push origin --delete $branch)` # brackets can be used in this case

# `date` (20241108)

# `grep`
## `--invert-match` aka. `-v`
## `--exclude-dir=subdir`
The value of `--exclude-dir` is [*GLOB*](https://tldp.org/LDP/abs/html/globbingref.html)
Example: `grep --exclude-dir={python,debian_configuration} -r "mail" .`
In case value `--exclude-dir` starts from the current directory, e.g. to exclude the directory inside current dir `x` the value needs to be `./x` instead of pure `x`, don't know why yet

# Text processing (20241210)
## `cut`
NOTE!
Limit of `cut` when used to get delimited columns is that the delimiter has to be a *char* rather than a string


# Practical Tip: In case of Bash with debug option `-x`, use `bash -x <script>.sh` instead of `source <script>.sh` with `set` inside the script
## Failure story on 20230131 when running `source <script>.sh` with MacBook's terminal
# `find`
## find a file by name
**example** 
find file named with `.json` as the extension in the current diretory: `find . -type f -name *.json`

## make use of `find` to truncate a directory
`find <dir> -mindepth 1 -delete`
# `tr` for string substitution (on multiple rows)

# `eval` to execute output text as command

# `mkdir`
no error if existing: `-p` option

# `sudo -s` in general VS `su` in Debian-based system (20230621)

# `rm`
* it has the verbose option `-v` to display the deleted items or ...
* wildcard `*` can be used flexibly. e.g. `rm /usr/local/*` to delete everything inside the directory `/usr/local`
# [`set`](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)

# Difference between executing a script as executable and as a script with `source` command or `.` in one terminal sessioni

Based on the *manual* of `sed`, `-i` is the same as `--in-place`
# `xargs`
## Use Case: there is a list of `git` branches with the same prefix, e.g. `FF-123`, I would like to remove all those branches in one go
`git branch |grep "FF-123" |xargs -n 1 git branch -D`
In the command above, the `-n 1` ensures that each branch name is processed as a separate argument based on *ChatGPT*
## Bad Use Cases
`export $(cat var.env|xargs)`

# `lsof`
## network releated option `-i`
`lsof -i` to list all the opening ports
### Problem: Port `8080` is already in use
Solution: `lsof -i :8080`

