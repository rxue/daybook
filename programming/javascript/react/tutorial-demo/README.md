# [Lesson 6: https://www.youtube.com/watch?v=TtPXvEcE11E&t=17969s](React Router, Start the Ecommerce Project)

* We can only return one element from a component https://www.youtube.com/watch?v=TtPXvEcE11E&t=19118s§

## [Rounting](https://www.youtube.com/watch?v=TtPXvEcE11E&t=19775s) - create multiple pages in React

* Routing let us create multiple pages using 1 HTML file
* `npm install react-router@7.1.5`
* documentation on react-rounter: https://reactrouter.com/home
* use `BrowserRouter` component

* [add `Routes` component to `App` component](https://www.youtube.com/watch?v=TtPXvEcE11E&t=20040s)
`Routes` component tells *React* all the pages that are in our websites

* Key takeaway: [When using `react-router`, use `<Link>` component instead of `<a>`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=22058s&pp=0gcJCTAAlc8ueATH) because the `<Link>` component goes to another page without reloading

# [Lesson 7: Backend, Data Fetching, Async Await](https://www.youtube.com/watch?v=TtPXvEcE11E&t=22200s)
## [Data Fetching using `fetch`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23169s)
* `fetch` is a built-in function provided by Javascript
* `fetch` is [*asynchronous code* - code that does not finish right away](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23250s)
### `fetch` returns a `Promise` - [`Promise` let us await for asynchronous code to finish](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23260s)
* `Promise` has a `.then` method
#### [`lambda` inside the `.then` handles the *Response*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23311s)
* *asynchronous* `response.json()` return Json data in the response
* `response.json` is also *asynchronous* and returns `Promise`
* [asynchronous coding shortcut](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23478s)
## [Data Fetching using `axios`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23566s)
## [(Common) problem in the data fetching code](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23721s&pp=0gcJCTAAlc8ueATH)
### Problem: [Fetching data directly inside the component means whenever the homepage changes or rerenders, the data fetching routine is rerendered again](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23728s)
### Solution: [Put Data Fetching Code to `useEffect()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23745s)
* `useEffect()` controls when some code runs
* the 2nd argument - [*Dependency Array*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23804s) - controls when `useEffect()` runs. `[]`(empty *dependency array*) only runs once
## [How to use the fetched data inside the loop](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23851s) - [save the data inside the `State`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=23858s)
