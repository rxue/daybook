# [Part 7: Datan käsittely](https://python-s20.mooc.fi/osa-7/4-datan-kasittely)
## Reading csv
### Practical Note (20220725)
The `~` in Unix-based system cannot be recognized as the *home* directory in the path argument of the csv


## [`random`](https://docs.python.org/3/library/random.html)
### `from random import choice`

## [`json` - JSON encoder and decoder](https://docs.python.org/3/library/json.html)
Using `json.tool` from the shell to validate and pretty-print:

`echo '{"json":"obj"}' | python -m json.tool`

NOTE! a drawback of `json.tool` is that the pretty-printed result does not reserve the order of the element in the origin json file

