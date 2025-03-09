# Chapter 5: Being a webapp: attributes and listeners
## *Init Parameters* and `ServletConfig` to the rescure
In the DD file:
```
<servlet>
  	<servlet-name>BeerParamTests</servlet-name>
  	<servlet-class>BeerInitParams</servlet-class>

	<init-param>
		<param-name>adminEmail</param-name>
		<param-value>likewecare@wickedlysmart.com</param-value>
	<init-param>
</servlet>
```

Page 150

> You can't use servlet init parameters until the servlet is initialized

page 151

In another word, you can't call `ServletConfig.getInitParameter` inside a servlet constructor

The only one `init` method of `HttpServlet` you need to *override* is the one with *no-arg*

## Context init parameters to the rescue
context parameters are **available to the entire webapp**, not just a single servlet

```
<servlet>
  	<servlet-name>BeerParamTests</servlet-name>
  	<servlet-class>BeerInitParams</servlet-class>
</servlet>

<context-param>
	<param-name>adminEmail</param-name>
	<param-value>clientheaderror@wickedlysmart.com</param-value>
</context-param>
```
NOTE! `<sevlet>` and `<context-param>` elements are on the same level - `<context-param>` is not nested inside `<servlet>`

Page 157 / pdf 187

## Servlet and Context Init Parameters (page 160/pdf page 185)

The most use case of `context parameter` : storing the database lookup name

> Think of init parameters as deploy-time constants!

> You can get them at runtime, but you can't set them There is no `setInitParameter().`

=> if the init parameter, either servlet or context, changes in the *DD*, only redeployment could reflect the change

on page 187(pdf page 163), *implicit objects* of JSP was mentioned


## Context Parameter Limitations (page 164/pdf page 189)
Limit of *init parameters* : value is only `String`

sole purpose in life is to initialize the app (and possibly to uninitialize it) - listener on servlet context



## configuring a listener in the DD

> this element (`<listener>`) is simple - it needs only the class name

> the `<listener>` element does not go inside a `servlet` element

Reference above is on page 174
## Eight Listeners: they are not just for context events...
### other listeners
> where there is a lifecyle moment, there is usually a *listener* to hear about it.

Reference above is on page 180

### The `HttpBindingListener`
> A plain old `HttpAttributeListener` is just a class that wants to know when any type of attribute has been added, removed or replaced in a Session. But the `HttpSessionBindingListener` exists so that the attribute itself can find out when it has been added to or removed from a *session*.



Reference above is on page 183

### Listener Chart
#### *Attribute Listeners*
 * `ServletRequestAttributeListener`
 * `ServletSessionAttributeListener`
 * `ServletSessionAttributeListener`



#### *Lifecyle Listeners*
 * `ServletRequestListener`
 * `ServletContextListener`
 * `HttpSessionListener`
 * `HttpSessionBindingListener`
 * `HttpSessionActivationListener`

Reference on page 184 (answer found on page 208)

## context scope and thread-safety [p/192 (pdf p/217)]
![the image describes the problem of not being thread-safe](https://private-user-images.githubusercontent.com/3033388/420589160-b6493e73-ec2a-44f8-a505-03512a81c33a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE0MzQ0MDEsIm5iZiI6MTc0MTQzNDEwMSwicGF0aCI6Ii8zMDMzMzg4LzQyMDU4OTE2MC1iNjQ5M2U3My1lYzJhLTQ0ZjgtYTUwNS0wMzUxMmE4MWMzM2EucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDMwOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTAzMDhUMTE0MTQxWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDZmMDFhZmU0ZmE5NjEzM2I5YmMzNzg0MjM2NmU1NzM0ZjJmYjE4NGM3NGJhYmU0ZjAwOTM4YWUwZDVlMjc3OSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.4NKe24esPgxeI-vVRXqpksCPRRwpgS8DEm4_G2t1hWE)


## `SingleThreadModel` is designed to protect *instance variables* [p/201 (pdf p/226)]

If a servlet implements `SingleThreadeModel`, no two threads will execute concurrently in the servlet's `service()` method => instance vairables of the `SingleThreadModel` servlet are thus protected

## Request attributes are *thread-safe* [(p/204 (pdf p/229)]

> only *request attributes* and *local variables* are *thread-safe* !

<blockquote>
...Look at a well-writen servlet, and chances are you won't find any *instance variables*. Or at least any that are non-final. ...

So just don't use instance variable if you need thread-safe state, because all threads for that servlet can step on instance variables.

Q: Then what SHOULD you need if you need multiple instances of the servlet to share something?

A: ... if you need all the threads to access a value, decide which attribute state makes the most sense, and store the value in an *attribute*. Chances are, you can solve your problems in one of two ways:

1. declare the variable as local variable within the service method, rather than as instance variable.

or

2. Use an attribute in the most appropriate scope.

</blockquote>
Reference above is on page 204

## Request Attributes and Request Dispatching

> You can't forward the request if you've committed a response

`os.flush()` ...That's the line that causes the response to be sent to the client,

#### Getting a `RequestDispatcher` from `ServletRequest`

#### Getting a `RequestDispatcher` from `ServletContext`
You cannot specify a path relative to the current resource => **you must start the path with a forward slash**

Reference above is on page 206


