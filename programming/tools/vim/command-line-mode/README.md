# [Command-line-mode - cmdline](https://vimdoc.sourceforge.net/htmldoc/cmdline.html)

## shift cursor (20250224)
### shift current line one line up
`:move -2` or use `m`, i.e. probably alias of `move` 
### shift current line one line down
`:move +1`
## search
### case-insensitive search
`/<word>\c` - word followed by `\c`

## delete
### delete word by word
#### delete words before cursor
 * `db` - delete the one word before currsor, if the cursor is among a word, it will delete the part of the word before the cursor
 * `5db` - delete `5` words before cursor

