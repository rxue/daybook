# [Lesson 3: State, Event Handlers, Create the Chatbot Features](https://www.youtube.com/watch?v=TtPXvEcE11E&t=5812s)

# [Lesson 4: CSS with React, Hooks, Finish the Chatbot Project](https://www.youtube.com/watch?v=TtPXvEcE11E&t=9763s)
## Add *auto scrolling* feature
### [*Hook*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12916s)
* *Hooks* insert *React* features into our component
* [`useState()` automatically updates the HTML when the data changes](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12935s)
* [`useEffect()` runs some code after the component is created or updated](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12969s&pp=0gcJCTAAlc8ueATH)
* `useRef()`
#### [Coding Demo](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12990s)
**Tips**

* put *hook* at the top of the *component*
* *hook* should not be inside anything

`useEffect(() => {}, [])` : React will run this function depending on the *Dependency Array*, i.e. the 2nd parameter

* invoked after *component* is created when the 2nd parameter is `[]` (an empty array)
* invoked every time this *component* is updated when the 2nd parameter is not empty and the data passing to the 2nd parameter changes


##### [`useRef()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=13248s) : save the *HTML element* from the *component*

* a *ref* is a container with special React features
* the parameter is the intial value
* e.g. `const chatMessagesRef = useRef(null);` saved the ref result into the *variable* `chatMessagesRef`

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
`const [products, setProducts] = useState([]);`

* The second valie `setProducts` is the *updater function*
### [Demo on cart implementation](https://www.youtube.com/watch?v=TtPXvEcE11E&t=24004s)
#### Implementing the *checkout* page
##### [load the data only once due to SPA](https://www.youtube.com/watch?v=TtPXvEcE11E&t=24657s)
For instance, the sending request to get cart and product data, these requests are needed to be sent only once when they are not updated

Solution of making loading products and cart data only once: [Lifting the state (of the cart data) up](https://www.youtube.com/watch?v=TtPXvEcE11E&t=24669s)
Lift the cart state one level up to the `App.jsx` *component*

##### [Implementation of the delivery date](https://www.youtube.com/watch?v=TtPXvEcE11E&t=26138s)
the `find()` method in `deliveryOptions.find()` is a standard built-in Javascript function from the Array
# [Lesson 8: Data Mutation, Types of Requests](https://www.youtube.com/watch?v=TtPXvEcE11E&t=28859s)
## Data Mutation: Update data in the backend
### [How to save the cart data? save the cart data in the backend](https://www.youtube.com/watch?v=TtPXvEcE11E&t=28894s)
Tips
* function can be passed as component function's parameter through different components. This is the key to make the quantity in the cart symbol update to date dynamically

