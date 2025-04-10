# `git log` (20250410)
## Log on other branch or *tag*
`git log [(remote) branch name]/[tag name]`

In case the branch is not remote, no need to give `[remote name]`

## [Good Learning Tips](https://gitbetter.substack.com/p/useful-tricks-you-might-not-know)

### `--author="<author name>"`

## 20250102 Question: How to list only the changed file names of THE LAST commit
`git log -1 --name-only` # -1 means the last commit, e.g. if the value is -2 it will list the result of the last 2 commits

Resource: Gemini
