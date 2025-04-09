# [`git reset`](https://www.youtube.com/watch?v=QEuqlpMOL9E&list=PLXO45tsB95cKysjmSNln65YoUt9lwEl7-&index=6) (中文)
In general, it is mostly about change the *state* backwards:

 * from *staged* back to *modified* : `git reset -- <file path>`
## How to discard all the changes on the current branch
1. `git fetch origin`
2. `git reset --hard origin/master` or `git reset --hard HEAD` (revert to the last commit)
