# Tutorial: https://www.youtube.com/watch?v=TtPXvEcE11E
## Tutorial: https://www.youtube.com/watch?v=TtPXvEcE11E
### Lesson 1: React Basics, JSX (20260325)
[React is an *external library*]

#### [Why are there 2 external libraries in React](https://www.youtube.com/watch?v=TtPXvEcE11E&t=998s)
* [react.js](https://www.youtube.com/watch?v=TtPXvEcE11E&t=1020s&pp=0gcJCTAAlc8ueATH) - shared features that are used in websites and **mobile apps**
* react-dom.js - features specific to websites
### [Lesson 3: State, Event Handlers, Create the Chatbot Features](https://www.youtube.com/watch?v=TtPXvEcE11E&t=5812s)
#### [How to Get the Text in a Textbox](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8033s&pp=0gcJCTAAlc8ueATH)
React Best Practice: Do not use DOM manually but use React features to get the text from a textbox

##### [`event.target`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8194s) gives us the element that we're typing in
* `event.target.value`
##### [Save the Text](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8264s&pp=0gcJCTAAlc8ueATH)
use *State* to save the text. *State* = save data that changes over time

Visualize the Components in App - *Component Tree*

### Lesson 4: CSS with React, Hook, Finish Chatbot Project


## Lesson 1: React Basics, JSX (20260325)
[React is an *external library*]

### [Why are there 2 external libraries in React](https://www.youtube.com/watch?v=TtPXvEcE11E&t=998s)
* [react.js](https://www.youtube.com/watch?v=TtPXvEcE11E&t=1020s&pp=0gcJCTAAlc8ueATH) - shared features that are used in websites and **mobile apps**
* react-dom.js - features specific to websites
## [Lesson 3: State, Event Handlers, Create the Chatbot Features](https://www.youtube.com/watch?v=TtPXvEcE11E&t=5812s)
### [How to Get the Text in a Textbox](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8033s&pp=0gcJCTAAlc8ueATH)
React Best Practice: Do not use DOM manually but use React features to get the text from a textbox

#### [`event.target`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8194s) gives us the element that we're typing in
* `event.target.value`
#### [Save the Text](https://www.youtube.com/watch?v=TtPXvEcE11E&t=8264s&pp=0gcJCTAAlc8ueATH)
use *State* to save the text. *State* = save data that changes over time

Visualize the Components in App - *Component Tree*

## Lesson 4: CSS with React, Hook, Finish Chatbot Project
### [Flexbox](https://www.youtube.com/watch?v=TtPXvEcE11E&t=10580s&pp=0gcJCTAAlc8ueATH)
#### [3 steps to use *flexbox*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=10627s)
1. create container around elements - add `<div>` to the place needing the *flexbox*
2. [add `display:flex;` to container](https://www.youtube.com/watch?v=TtPXvEcE11E&t=10693s)
3. use *flexbox* features 

##### Flexbox features:
* [`flex grow`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=10762s) - makes the element grow and take off the remaining space
* [`justify-content`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=11340s)

[make `.chat-message-robot` a *flexbox*](https://www.youtube.com/watch?v=TtPXvEcE11E&t=11540s) : When a block element (like `<div>`) is inside a *flexbox*, it no longer takes up the entire line

* [`aligh-items`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=11827s) - controls how the elements are displayed vertically, it resolves the default behavior of elements inside a *flexbox* being streching vertically

#### [Another use of *flexbox* in demo](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12400s)
[by default, *flexbox* positions elements horizontally](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12459s)

* [`flex-direction`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12472s) - value can be `row`/`column`
## Lesson 5: Proper React Setup
[`npm`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=14223s) - node package manager, where package = external library
### [Proper React Setup](https://www.youtube.com/watch?v=TtPXvEcE11E&t=14342s)
#### [`src`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=14758s) - source code directory
Data inside `src/assets` is not downloadable

