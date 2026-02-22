# [Tutorial](https://www.youtube.com/watch?v=TtPXvEcE11E)
##
* `div` = container

## [Lesson 2: Components, Props, Start the Chatbot Project](https://www.youtube.com/watch?v=TtPXvEcE11E&t=2416s)

## [Lesson 4: CSS with React, Hooks, Finish Chatbot Project](https://www.youtube.com/watch?v=TtPXvEcE11E&t=9763s&pp=0gcJCTAAlc8ueATH)
### auto scrolling by using *Hooks*, which insert React features into our component

* `React.useState()` is a hook
#### [`useEffect()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=12969s)
#### [`useRef()`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=13224s)
`useRef()` automatically save an HTML element from the *component*

## [Lesson 5: Proper React Setup with Vite](https://www.youtube.com/watch?v=TtPXvEcE11E&t=13729s)

### Project structure

#### [`package-lock.json`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=15037s) 
* saves all the version numbers of the packages that we installed
* `npm` automatically updates `package-lock.json`

#### [`vite`](https://www.youtube.com/watch?v=TtPXvEcE11E&t=15110s)
* Vite is used to generate the project
* Vite is also used help us build the website
* Vite also creates a server that puts our website at a URL

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
