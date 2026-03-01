# [Lesson 3: State, Event Handlers, Create the Chatbot Features](https://www.youtube.com/watch?v=TtPXvEcE11E&t=5812s)
## [Event Handler](https://www.youtube.com/watch?v=TtPXvEcE11E&t=6902s)
### [`onClick`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=6961s) = an event, which will trigger the running of a function we click. This function is kinda the *event handler*
Note that the value passed to `onClick` should be sth like `sendMessage` instead of `sendMessage()`, i.e. brackets are not allowed
## [intro to state](https://www.youtube.com/watch?v=TtPXvEcE11E&t=7290s)
* state: data that is connected to the HTML
* `useState()` convert the data into *state*
* [*array destructuring*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=7862s) - the order of elements is the most important in array destructuring
## [demo: get text in the text input field - `onChange()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8033s)
* [*event*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8186s) passed to the *event handler* through method signature `onChange(event)` - event object contains details about the event
* `event.target` gives the (html) element that we are typing in
### [Make the send button interactive (by means of `onClick`)](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8412s)
#### [problem: no access to `setChatMessages`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8559s)
* solution: Lift the *state* up - shate the *state* between multiple components
#### [improvement: clear the input text in the input field right after clicking the send button](https://www.youtube.com/watch?v=TtPXvEcE11E&t=9019s)
##### solution: *Controlled Inputs*
in addition to invoke the *setter* at the end of the `onClick` event handler, need to pass the `inputText` to `value` *prop* of `<input>` element

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
### [make quantity selector work](https://www.youtube.com/watch?v=TtPXvEcE11E&t=29408s)
* need to separate product into its own component so that the *state* of the quantity is as per each product

### Create order
#### After clicking "Place your order" to create an order, [redirect to the order page](https://www.youtube.com/watch?v=TtPXvEcE11E&t=31480s) to see the new order content
##### solution: `useNavigate()` - let us navigate to another page in the app by
*navigate* is not asynchronous

# [Lesson 9: Automated Tests in React with *Vitest*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=31810s)
`npm install vitest@3.12 --save-dev` to install the test lib where the `--save-dev` installs dependency only for development
* [`npx vitest`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=32195s)
* [group  tests using `describe`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=32380s)
## [Integration test](https://www.youtube.com/watch?v=TtPXvEcE11E&t=28894s)
### [render the component when testing the component](https://www.youtube.com/watch?v=TtPXvEcE11E&t=32648s)
#### [`vitest.config.js`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=32701s) 
#### [should not contact a backend => mock](https://www.youtube.com/watch?v=TtPXvEcE11E&t=32920s)
`vi` from `vitest` is used for mocking: `const loadCart = vi.fn();`
#### `screen` from `@testing-library/react` to check if the component is displayed correctly
## [test user interaction](https://www.youtube.com/watch?v=TtPXvEcE11E&t=33519s)
* [mock axios, i.e. mock the entire axios package](https://www.youtube.com/watch?v=TtPXvEcE11E&t=33793s&pp=0gcJCTAAlc8ueATH)
* recommendation: [recreate each shared variables before each test](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34117s) by using [`beforeEach()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34150s)
## [Mock implementation](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34272s)
### [mocking implementation of `axios.get()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34465s)
#### [ error analysis on test failure](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34749s)
* cause of the error: [HomePage component is not inside Router in the test code](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34785s)
* solution: [place the HomePage around our Rounter in the test code](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34796s) using [**`MemoryRouter`**](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34796s) (specifically for testing)
### [*synchronous* `screen.findAllByTestId()` to get html elements with sure result](https://www.youtube.com/watch?v=TtPXvEcE11E&t=34959s)
### [intro to `within()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=35067s&pp=0gcJCTAAlc8ueATH)
* [`within()` lets us find things within a specific element](https://www.youtube.com/watch?v=TtPXvEcE11E&t=35112s&pp=0gcJCTAAlc8ueATH)
# [Lesson 10: Deploy React to the internet, intro to aws](https://www.youtube.com/watch?v=TtPXvEcE11E&t=35431s)
# [Lesson 11: React 19 update
## [React Compiler](https://www.youtube.com/watch?v=TtPXvEcE11E&t=38605s)
* [Set up React Compiler](https://www.youtube.com/watch?v=TtPXvEcE11E&t=38702s)
* [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) Chrome extension
### *TypeScript* with React
* [removed: `propTypes`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=38958s), [in favor of *TypeScript*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=38985s)
* [removed `defaultProps`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=38996s)
#### [How to set up *TypeScript* with React](https://www.youtube.com/watch?v=TtPXvEcE11E&t=39018s)
#### [Intro to TypeScript](https://www.youtube.com/watch?v=TtPXvEcE11E&t=39183s)

