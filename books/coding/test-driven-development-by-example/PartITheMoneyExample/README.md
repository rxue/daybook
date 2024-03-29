# Part I: The Money Example
## Chapter 1. Multi-Currency Money
goal: write test that "makes sense", without having to change the code

By duplication before we go on to the next text, we maximize out chance of being able to get the next test running with one and only one change

TDD is not about teeny-tiny steps, it's about being able to take teeny-tiny steps

## Chapter 2. Degenerate Objects

tip: Divide and Conquer: 1st solve the "that work" part of the problem, then we will solve the "clean code" part

3 strategies for quickly getting to green:

* fake: return a constant and gradually replace constants with variables until you have the real code.
* *Obvious Impleentation* : type in the real implementation
* triangulation

## Chapter 3: Equality for All
*aliasing*


## Chapter 6. Equality for All, Redux
> Before we change the code, we'll write the tests that should have been there in the first time

> you will often be implementing in code that doesn't have adequate tests. When you don't have enough tests, you are bound to come across refactorings that aren't supported by tests. You could make refactoring mistake and the tests would all still run

## Chapter 17. Money Retrospective
### What's Next?
*Lingering duplication* ' : a symptom of latent design - duplication that is difficult to eliminate given the design 

### Process
TDD process

 1. Add a little test
 2. Run all tests and fail
 3. Make a change
 4. Run the tests and succeed
 5. Refactor to remove duplication

### Test Quality
*Defect Insertion*
