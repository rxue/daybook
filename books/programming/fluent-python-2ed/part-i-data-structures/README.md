# Chapter 2. An Array of Sequences
## List Comprehensions and Generator Expressionsions
### List Comprehensions and Readability

*listcomps* is more readable, i.e. *comprehensive*

> the goal is always to build a new list

*Walrus Operator*

## Tuples Are Not Just Immutable Lists
### Comparing *Tuple* and `list` Methods
 `list`       | `tuple`         | Description
--------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`s.pop([p])`  | not supported   | remove and return last item or item at optional position `p` . MY OWN PRACTICAL COMMENTS: `list.pop(0)` can be considered as dequeue operation when using `list` as a *queue*
`s.remove(e)` | not supported   | remove the *first occurrence* of element `e` by value

**PRACTICAL TIPS**
The use of `[]` in this book in based on the tools documentation in *Unix-like* systems. Thumb up!





**Key Takeaway**

*Tuple* is an immutable version of `list`, so only update operations on `list` is not supported in *tuple*

## When a List is Not the Answer
### *Deques* and Other *Queues*
`from collections import deque`

Operations on `deque`

* `append(e)`
* ``pop()`

# Chapter 3. Unicode Text Versus Bytes
## Normalizing Unicode for Reliable Comparisons
### Extreme "Normalization": Taking Out Diacritics
use of `''.join`
# Chapter 5. Data Class Builders
## Type Hints 101
### Variable Annotation Syntax

**Acceptable type hints**

* `typing.Optional`, for example, `Optional[str]` - a field/parameter can be `str` or `None`

# Chapter 3. Dictionaries and Sets
## What's New in This Chapter
> The underlying implementation of `dict` and `set` still relies on *hash tables*

# Chapter 6: Object References, Mutability, and Recycling
## Further Reading
### SOAPBOX
`None` is a proper object, this is different from the `null` in Java
