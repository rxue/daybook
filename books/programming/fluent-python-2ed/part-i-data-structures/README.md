# Chapter 1. The Python Data Model
## How Special Method are Used
*built-in types* : `list`, `str`, `bytearray` etc. *built-in* stuff does not need to be imported with the `import` keyword

# Chapter 2. An Array of Sequences
## List Comprehensions and Generator Expressionsions
**terms**
* *listcomps* is short for *list comprehension*
* *genexps* : generator expressions

### List Comprehensions and Readability
**tips**
* keep *listcomp* short
* practical: variable is allowed to be defined only after the `for`

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
> The `.append` and `.pop` methods make a *list* usable as a *stack* or a *queue* (if you use `.append()` and `.pop(0)` you get FIFO behavior) ...

=> use `list` as *FIFO* is OK in simple cases, but performance is costly!

`from collections import deque`

Operations on `deque`

* `append(e)`
* ``pop()`

# Chapter 3. Dictionaries and Sets
## What's New in This Chapter
> The underlying implementation of `dict` and `set` still relies on *hash tables*
## Modern `dict` Syntax
### Unpacking Mappings
## Standard API of Mapping Types
### Overview of Common Mapping Methods
* `d.get(k, [default])` - Get item with key `k`, return `default` or `None` if missing
OWN TAKE: Based on the timeline, `Map#get(Object key, V defaultValue)` since Java SE 8 was probably kinda following the idea of this method in Python

* `d.__getitem__(k)` - `d[k]` - get item with key `k` (NOTE! this is assuming the given key exists in the dictionary, so if the key does not exist error will be thrown)


* `d.items()` - used to loop dictionary items
corresponds to `map.entries()`

# Chapter 4. Unicode Text Versus Bytes
## Normalizing Unicode for Reliable Comparisons
### Extreme "Normalization": Taking Out Diacritics
use of `''.join`
# Chapter 5. Data Class Builders
> Data classes are like children. They are OK as a starting point, but to participate as a grownup object, they need to take some responsibility.

`@dataclasses.dataclass` since Python 3.7

## Type Hints 101
### Variable Annotation Syntax

**Acceptable type hints**

* `typing.Optional`, for example, `Optional[str]` - a field/parameter can be `str` or `None`


# Chapter 5. Data Class Builders
## *Type Hints* 101
### No Runtime Effect


# Chapter 6: Object References, Mutability, and Recycling
## Further Reading
### SOAPBOX
`None` is a proper object, this is different from the `null` in Java
