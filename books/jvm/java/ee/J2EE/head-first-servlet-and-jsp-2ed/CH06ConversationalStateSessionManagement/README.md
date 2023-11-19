# Chapter 6. Conversational state: session management

> web servers have no short-term memory

Reference above is on page 223

## Session IDs, cookies and other session basics
> on the client's first request, the Container generates a unique session ID and gives it back to the client with the response. **The client sends back the session ID with each subsequent request**  
Reference above is on page 231
### the joy of *Cookies*
### The best part: the container does virtually all the cookie work!
> ... the container takes care of generating the session ID, creating a new `Cookie` object, stuffing the session ID into the cookie ...
<blockquote>
...somewhere in your `service` method you ask for a session, and everything else happens **automatically**

* You don't make the new `HttpSession` object yourself
* You don't generate the unique session ID
* You don't make the new `Cookie` object
* You don't associate the session ID with the cookie
* You don't set the Cookie into the response
</blockquote>
Reference above is on page 233

## URL rewriting: somthing to fall back on
URL encoding is all about response

Reference above is on page 239

## When sessions get stale; getting rid of bad sessions

<blockquote>
  <session-config>
    <session-timeout>15</session-timeout>
  </session-config>
</blockquote>

> you specify timeouts in the DD using MINUTES, but if you set a timeout programmatically, you specify SECONDS

> ...when you add a *Cookie* to the response, you pass a Cookie object...

> ...there is not a `setCookie()` method. There is only `addCookie()` method!

Reference above is on page 245

## Listener examples

Session counter in a *non-distributed system* as a typical use case of `HttpSessionListener`

page 261

## Using Cookies with Servlet API
Setting max age to `-1` makes the cookie disappear when the browser exits

pdf page 277