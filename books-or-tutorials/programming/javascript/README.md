# 
## [product data in a js file](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=42675s)
Note that the `product.js` is loaded at program start up

# [Lesson 16: Testing](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=56126s)
## [Automated Testing](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=56319s)
### [test suit - group related tests together](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=57355s)
## [Testing framework](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=57504s)
### [Jasmine](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=57570s&pp=0gcJCTAAlc8ueATH)

# [Lesson 17: Object-Oriented Programming](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=63390s)
* [`export let cart;`] is short for `export let cart = undefined;`
* function inside objects - [method](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=63796s&pp=0gcJCTAAlc8ueATH)
** [shorthand for method](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=63803s)

# Lesson 18: Intro to Backend, Callback, Async Await
## XMLHttpRequest
### [response - intro to asynchronous](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=71140s)
when `xhr.send()`, it takes time to for the request to travel across the Internet => `xhr.response` will be turned immediately as `undefined`. So the `xhr.send()` is called asynchronous code
## demo
### [`loadProducts` function](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=72360s&pp=0gcJCTAAlc8ueATH) to load products from the backend
[`products` are assigned inside the event handler callback](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=72638s)

#### [pass function to `loadProduct` function](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=72955s) - typical *callback*
[anonymous function](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=73260s)
## [`Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=73857s) - make wait for asynchronous code to finish before going to the next step (20260415)
### [`resolve` function param](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=73984s)
* similar to the `done()` function in Jasmine
### core purpose of `Promise`
* [let us control when to go to the next step](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=74065s)
* allows Javascript to do multiple things at the same time
### [how to add next step to `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=74132s)
### [Why use `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=74380s)
[`Promise` let us flatten our code](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=74380s)
### [summary: use `Promise` instead of callback](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75040s)
### [2 more features of `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75068s)
#### [we can run multiple `Promise`s at the same time](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75134s) - [`Promise.all()`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75165s)
### [`fetch`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75506s) - typical use case of `Promise`
[How to get response](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75652s) - `.then()` which returns `Promise`
#### `response`
##### [`response.json()`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=75794s)
* `response.json()` is asynchronous and returns a `Promise`
* `return reponse.json()` inside `then` block will make the `json()` to complete - synchronous
## [`async` and `await`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76370s) - shortcut for `Promise`
### [demo](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76409s)
* [`async` function returns `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76480s)

[equivalent code comparison](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76528s) between `async` and using `Promise` explicitly

### [what is the point of using `async`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76590s) - use it with `await`
* `await` lets us wait for a `Promise` to finish before going to the next line
* [`await` lets us write asynchronous code like normal code](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76669s)

#### [demo](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76772s)
#### [RULE: async await can only be used with `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76806s)
It doesn't do anything with *callback*
### [Details of `async` `await`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76950s)
* [we can't use `await` inside a normal function](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=76973s)
## [Error handling](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=77112s)
### [error handling in `Promise`](https://www.youtube.com/watch?v=EerdGm-ehJQ&t=77330s)

