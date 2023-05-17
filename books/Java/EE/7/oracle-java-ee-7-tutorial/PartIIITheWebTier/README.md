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
## Navigation Model
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

example ``h:commandButton` from ``greeting.xhtml` that would specify a logical outcome of `success``:

	<h:commandButton id="submit" value="Submit" action="success"/> 

### Self-Comment

Based on the documentation of *navigation* above, NOTE! *user-defined navigation* can work ONLY when there is `action` attribute on the component tag

# 8. Introduction to Facelets
## What is Facelets
*Facelets* feature includes the following:
* Use of XHTML for creating web pages
* Support for *Facelets* tag libraries in addition to JavaServer Faces and JSTL tag libraries
* Support for the expression language (EL)
* Templating for components and pages

# 9. Expression Language
## Overview of the EL
> In a JavaServer Faces page, an EL expression can be used either in static text or in the attribute of a custom tag or standard action.

# 10. Using JavaServer Faces Technology in Web Pages
## 10.2 Adding Components to a Page Using HTML Tag Library
### Creating Bookmarkable URLs with `h:button` and `h:link` Tags


# 12. Developing with JavaServer Faces Technology
## [Writing Managed Bean Methods](https://docs.oracle.com/javaee/7/tutorial/jsf-develop003.htm)
Mehtods of managed bean can perform several application-specific functions for components on the page. These functions include

* Performing processing associated with navigation
* Handling action events
* Performing validation on the components' value
* Handling value-change events

# 13. Using Ajax with JavaServer Faces Technology
## Using Ajax with Facelets
> ... JavaServer Faces technology supports Ajax by using a built-in JavaScript resource library that provided as part of the JavaServer Faces core library. This built-in Ajax resource can used in JavaServer Faces web applications in one of the following ways:

 * By using `f:ajax` tag along with another standard component in a Facelets application. This method adds Ajax functionality to any UI component *without additional coding and configuration*.
 * By using the JavaServer API `jsf.ajax.request()` directly within the Facelets application. This method provides direct access to Ajax methods and allow customized control of component behavior.

## Sending an Ajax Request
> Behind the scenes, the `jsf.ajax.request()` method of the *JavaScript resource library* collects the data provided by `f:ajax` tag and posts the request to the JavaServer Faces lifecycle.

# 16. Configuring JavaServer Faces Applications
## 16.9. Configuring Navigation Rules
> After the proper navigation rule is selected, the choice of which page to access next from the current page depends on two factors:

 * The action method invoked when the component was clicked
 * The logical outcome referenced by the component's tag or returned from the action method

# 17. Java Servlet Technology
## Sharing Information
### Using Scope Objects

lists of *scope objects*

 Scope Object | Class                                     | Accessible From
--------------|-------------------------------------------|------------------------------------------------------------
 Web context  | `javax.servlet.ServletContext`            | Web components within a web context
 Session      | `javax.servlet.http.HttpSession`          | Web components handling a request that belongs to the session
 Request      | sub-type of `javax.servlet.ServletRequest`| Web components handling the requests
 Page         | `javax.servlet.jsp.JspContext`            | The JSP page that creates the objects