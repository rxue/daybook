# Preface
## *Legacy Code*

> In the industry, *legacy code* is often used as a slang term for difficult-to-change code that we don't understand.

But to the author, Michael Feathers

> *legacy code* is simple code without tests.

# Part II: Changing Software
## Chapter 7: It takes Forever to Make a Change
### Understanding
> Systems that are broken up into small, well-named understandable pieces enable faster work.

## Chapter 8: How Do I Add a Feature?

### Comment: Trick for *cut/copy/paste*
Often times when adding new features or fixing bugs in legacy code base, lots of coders prefer to adding one or more arguments to an existing method signature. This should be averted whenever possible because, adding more arguments also means the more reasons for changing the residing class, which is against the *Single Responsibility Principle*. However, when the last resort is adding one or more arguments to an existing method, *cut/copy/paste* would come into play. Particularly if the method is used many times in the code base (*Find usage* with IDE), directly adding more arguments would cause the changes everywhere the method is called, so do *cut/copy/paste* (*use method overloading*), then mark the previous method as `@Deprecated` if the new method is more handy to be used

## Chapter 9: I Can't Get This Class into a Test Harness
### The Case of the Irritating Parameter
> The best way to see if you will have trouble  instantiating a class in a test harness is to just try to do it. Write a test case and attempt to create an object in it. The compiler will tell you what need to make it really work.
### The Case of the Irritating Global Dependency
> In Java, the *singleton pattern* is one of the mechanisms people use to make *global variables*. In general, global variables are a bad idea for a couple of reasons. One of them is opacity. When we look at a piece of code, it is nice to be able to know what it can affect.

> Often people create singleton property because they want to have a global variable. They feel that it would be too painful to pass the variable around to the places where it is needed.

> If we have a singleton for the latter reason<sub>the need of global variable mentioned above</sub>, there really isn't any reason to keep the singleton property. We can make the constructor `protected`, `public` or *package scope* and still have a decent, testable system.
## Chapter 10: I Can't Run This Method in a Test Harness
### The Case of the Hidden Method
> If we need to test a private method, we should make it `public`. If making it public bothers us, in most cases, it means that our class is doing too much and we ought to fix it.

### The Case of the Undetacable Side Effect
#### [*Query-Query Separation*](https://www.youtube.com/watch?v=eb3nbt4poic)


## Chapter 11: I Need to Make a Change. What Methods Should I Test?
### Reasoning About Effects
### Reasoning Forward
> When you are sketching effects, make sure that you have found all of the clients of the class you are examining. If your class has a superclass or subclasses, there might ber other clients that you havn't considered.
### Effect Propagation
### Learning from Effect Analysis
> Try to analyze effects in code whenever you get a chance.

> In general, programming gets easier as we narrow effects in a program. We need to know less to understand a piece of code. At the extreme, we end up with *funcitonal programming* in languages such as Scheme and Haskell.

## Chapter 13: I Need to Make a Change, but I don't Know What Tests to Write
### Characterization Tests
> The tests that we need when we want to preserve behavior are what I cal *characterization tests* . A *characterization test* is a test that characterize the actual behavior of a piece of code.


## Chapter 17: My Application Has No Structure
### Telling the Story of the System

## Chapter 19: ~~My Project Is Not Object Oriented. How Do I Make Safe Changes?~~


## Chapter 20 The Class is Too Big and I Don't Want It to Get Any Bigger
### Moving Forward
#### Strategy
#### Tactics
> 1. Identify a Responsibility that you want to separate into another class
> 2. Figure out whether any instance variables will have to move to the new class. If so, move them to a separate part of the class declaration, away from the other instance variables.
