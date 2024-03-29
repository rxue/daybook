# 6. Getting Started with Web Applications
## Configuring Web Applications
### Declaring Resource References
> there are some restrictions on using it in web applications. First, **you can inject resources only into container-managed objects**, because container must have control over the creation of a component so that it can perform the injection into a component.

Web Components That Accepts Resource Injections

Component         | Interface/Class
------------------|------------------
Servlets          | `javax.servlet.Servlet`
Servlet filters   | `javax.servlet.ServletFilter`
Servlet listeners | `javax.servlet.ServletContextListener` and all others
Managed beans     | Plain Old Java Objects

# 7. JavaServer Faces Technology
## 7.3 A Simple JavaServer Faces Application
The lifecyle (of a server response by means of JSF) consists of two main phases: Execute and Render:

During the *Execute* phase, several actions can take place:

 * The application view is built or restored
 * The request parameter values are applied
 * Conversions and validations are performed for component values
 * Managed beans are updated with component values
 * Application logic is invoked


## 7.4 User Interface Component Model
### 7.4.4 Event and Listener Model
*Action event* is processed in phase:
 * `immediate=true` : Apply Request Value
 * `immediate=false` : Invoke Application
*Value-Change event* is processed in phase:
 * `immediate=true` : Apply Request Value
 * `immediate=false` : Process Validations


### Validation Model
2 ways to implement custom validation:
 * Implement `Validator` interface
 * Implement a managed bean method that performs the validation
## 7.5 Navigation Model
> In *JavaServer Faces* technology, **navigation** is a set of rules for choosing the next page or view to be displayed after an *application action, such as when a button or link is clicked*

When you add a component such as a `commandButton` to a *Facelets* page, and assign another page as the value for its `action` property, the default navigation handler will try to match a suitable page within the application *implicitly*. In the following example, the default navigation handler will try to locate a page named `response.xhtml` within the application and navigate to it:

`<h:commandButton value="submit" action="response">`

*User-defined navigation* is handled as follows:

 * Define the rules in the application configuration file
 * Refer to an outcome `String` from the button or link component's `action` attribute. This outcome `String` is used by the JavaServer Faces implementation to select the navigation rule.

Example:

	<navigation-rule> 
		<from-view-id>/greeting.xhtml</from-view-id> 
		<navigation-case>
			<from-outcome>success</from-outcome>
			<to-view-id>/response.xhtml</to-view-id>
		</navigation-case>
	</navigation-rule>

> This rule states that when a command component (such as an `h:commandButton` or an `h:commandLink`) on `greeting.xhtml` is activated, the application will navigate from the `greeting.xhtml` page to the `response.xhtml` page if the outcome referenced by the button component's tag is success.

example `h:commandButton` from `greeting.xhtml` that would specify a logical outcome of `success`:

	<h:commandButton id="submit" value="Submit" action="success"/> 

### Self-Comment

Based on the documentation above, NOTE! *user-defined navigation* can work ONLY when there is `action` attribute on the component tag and, to the `action` attribute, it is worth to note that `action` is the attribute of HTML `form`, meaning JSF tag containing the `action` attribute has to be inside the `h:form` tag

Reference: https://www.w3.org/TR/html401/interact/forms.html

## 7.6. The Lifecyle of a JavaServer Faces Application
### Overview of the JavaServer Faces Lifecyle
![JSF Life-cycle](https://docs.oracle.com/javaee/7/tutorial/img/jeett_dt_016.png)
The *request-response lifecycle* supports 2 kinds of requests:
 * *initial request* : when a user makes a request for the first time
 * *postback request* : when a user *submits the form* contained on a page that was previously loaded in a browser as a result of executing an intial request

> ...when a component's `immediate` attribute is set to `true`, the validation, conversion and events associated with these components are processed during the *Apply Request Values Phase* rather than in a later phase

### Apply Request Values Phase
> If some components on the page have their `immediate` attributes set to `true`, then the validations, conversions, and events associated with these components will be processed during this phase.

# 8. Introduction to Facelets
Facelets: the view declaration language for JavaServer Faces technology.

## What is Facelets

*Facelets* feature includes the following: (20230702)
* Use of XHTML for creating web pages
* Support for *Facelets* tag libraries in addition to JavaServer Faces and JSTL tag libraries
* Support for the expression language (EL)
* Templating for components and pages

## HTML5-Friendly Markup
### Using *pass-through element*
pass-through (HTML5) element by using `http://htmlns.jcp.org/jsf` namespace on a single attribute (to JavaServer Faces)

Example:
```
<html ... xmlns:jsf="http://xmlns.jcp.org/jsf"
  ...
  <input type="email" jsf:id="email" name="email" value="#{reservationBean.email}" required="required"/>
```
### Using *pass-through attributes*

# 9. Expression Language
## Overview of the EL
> In a JavaServer Faces page, an EL expression can be used either in static text or in the attribute of a custom tag or standard action.

### Self-comment
EL is used to dynamically read/write data stored in JavaBean components.

## Value and Method Expressions
2 expressions defined by EL:
 * Value Expression: yield a value
 * Method Expression: reference a method

# 10. Using JavaServer Faces Technology in Web Pages
## 10.2 Adding Components to a Page Using HTML Tag Library
### Creating Bookmarkable URLs with `h:button` and `h:link` Tags

# Chapter 11. Using Converters, Listeners and Validators
## Using the Standard Converters
### Using `DateTimeConverter`
attributes in `f:convertDateTime`:
 * `dateStyle`
 * `timeStyle`
 * `binding`
 * `for`
 * `locale`
 * `pattern`
 * `timeZone`
 * `type`

# 12. Developing with JavaServer Faces Technology
## [Writing Managed Bean Methods](https://docs.oracle.com/javaee/7/tutorial/jsf-develop003.htm)
Mehtods of managed bean can perform several application-specific functions for components on the page. These functions include

* Performing processing associated with navigation
* Handling action events
* Performing validation on the components' value
* Handling value-change events

## Writing Bean Properties
A managed bean property can be bound to one of the following items:

 * A component value
 * A component instanace
 * A converter implementation
 * A listener implementation
 * A validator implementation

> The component's tag binds the component's value to a managed bean property by using its `value` attribute and binds the component's instance to a managed bean property by using its `binding` attribute. Likewise, all the converter, listener, and validator tags use their `binding` attributes to bind their associated implementations to managed bean properties.

# 13. Using Ajax with JavaServer Faces Technology
## Using Ajax with Facelets (20230701)
> ... JavaServer Faces technology supports Ajax by using a built-in JavaScript resource library that provided as part of the JavaServer Faces core library. This built-in Ajax resource can used in JavaServer Faces web applications in one of the following ways:

 * By using `f:ajax` tag along with another standard component in a Facelets application. This method adds Ajax functionality to any UI component *without additional coding and configuration*.
 * By using the JavaServer API `jsf.ajax.request()` directly within the Facelets application. This method provides direct access to Ajax methods and allow customized control of component behavior.

## Sending an Ajax Request
> Behind the scenes, the `jsf.ajax.request()` method of the *JavaScript resource library* collects the data provided by `f:ajax` tag and posts the request to the JavaServer Faces lifecycle.

# Chapter 15. Creating Custom UI Components and Other Custom Objects
## Determining Whether You Need a Custom Components or Renderer
### When to Use a Custom Renderer

# 16. Configuring JavaServer Faces Applications
## 16.1. Using Annoation to Configure Managed Beans
> The `@Named` annotation in a class, along with a scope annotation, automatically registers that class as a resource with the JavaServer Faces implementation. A bean that uses these annotations is a *CDI managed bean*.
### Self-comment
言外之意, 这两个annotation都是必须的,缺一不可

## 16.9. Configuring Navigation Rules
> After the proper navigation rule is selected, the choice of which page to access next from the current page depends on two factors:

 * The action method invoked when the component was clicked
 * The logical outcome referenced by the component's tag or returned from the action method

# 17. Java Servlet Technology
*request-response programming model*
## Servlet Lifecycle
event contains information appropriate to the event
## Sharing Information
### Using Scope Objects

lists of *scope objects*

 Scope Object | Class                                     | Accessible From
--------------|-------------------------------------------|------------------------------------------------------------
 Web context  | `javax.servlet.ServletContext`            | Web components within a web context
 Session      | `javax.servlet.http.HttpSession`          | Web components handling a request that belongs to the session
 Request      | sub-type of `javax.servlet.ServletRequest`| Web components handling the requests
 Page         | `javax.servlet.jsp.JspContext`            | The JSP page that creates the objects

## Filtering Requests and Responses
Application of filters:

 * authentication
 * logging
 * image conversion
 * data compression
 * encryption
 * tokenizing streams
 * XML transformations 

# Chapter 18. Java API for *WebSocket*
## 18.2 Creating *WebSocket* Applications in the JavaEE Platform
> Note: As opposed to servlets, WebSocket endpoints are instantiated multiple times. **The container creates an instance of an endpoint per connection to its deployment URI. Each instance is associated with one and only one connection. This facilitates keeping user state for each connection and makes development easier, because there is only one thread executing the code of an endpoint instance at any given time.**

reference of an anti-pattern: https://github.com/rxue/javaee-investment/issues/2

## 18.5 Sending and Receiving Message
### Sending Messages
`RemoteEndpoint` is used to send messages

3 types of messages *WebSocket* in Java could send and receive:
 * text : `String`
 * binary : `ByteBuffer`
 * ping/pong frame : `PongMessage`
### Receiving Messages
<=3 methods annotated with `@OnMessage` is allowed in one *endpoint*. One for each message type: `String`, `ByteBuffer`, `PongMessage`

## 18.12 The Websocketbot Example Application
### 18.12.1 Architecture of Websocketbot Example Application
> The Java API for *WebSocket* specification requires that Java EE implementations **instantiate endpoint classes once per connection**. This facilitates the development of WebSocket endpoints, because you are guaranteed that only one thread is executing the code in a WebSocket endpoint class at any given time. When you introduce a new thread in an endpoint. as in this example, you must ensure that variables and methods accessed by more than one thread are *thread safe*...

# Chapter 19: JSON processing
## JSON Processing in the Java EE Platform

# Chapter 20. Internationalization and Localizing Web Applications
*Localization* : process of adapting an internationalized application to support a specific region or locale. 
