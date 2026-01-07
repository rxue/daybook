# Chapter 8: Type Hints in Functions
## Types Usable in Annotations
### Optional and Union Types
> `Optional[str]` is actually a shortcut for `Union[str,None]`, which means the type of `plural` may be `str` or `None`.

This sentence above indicate that `None` is also a type in addition to being a value

`plural: Optional[str] = None` is the equivalence of `str | None = None`, but by using the union operator, introduced since 3.10, there is no need to `import` the `Optional`


### Generic Collections
> Most Python collections are heterogeneous. For example, you can put any mixtures of different types in a `list`
## parameterized Generics and `TypeVar`
### Restricted `TypeVar`
### Bounded `TypeVar`
### The `AnyStr` predefined type variable
## [Static protocols](https://peps.python.org/pep-0544/)

