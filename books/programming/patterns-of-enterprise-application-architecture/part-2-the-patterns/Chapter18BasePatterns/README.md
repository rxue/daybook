# Categorization of Patterns

Pattern       | On Which Side 
--------------|----------------
*Gateway*     | Client

## Registry
Typical examples
* *process-scoped* *Registry* : a list of all states in the United States, it can be loaded during process start up and never need changing
* *thread-scoped* *Registry* : database connection


## Value Object
> A small simple object, like money or a date range, whose equility isn't based on identity

### How It Works

Its counter part is *reference object*

Key difference between *reference object* and *value object*

* *reference objects* use *identity* to implement `equals`
* *value object* use its field values to implement `equals`


> For value objects to work properly in these cases, it's a very good idea to make them *immutable*

NOTE! But *immutability* is not the key to define *value object*, so *immutability* is not  hard and fast constraint on *value objects*

### When to Use It
Equality is based on something other than *identity* (since value objects have no identity)
