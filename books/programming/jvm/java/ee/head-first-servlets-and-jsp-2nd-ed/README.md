# Chapter 4: Being a Servlet: request AND response
**But there's more to a servlet's life**

Key takeaway

* servlet object instance has only one single state - *initialized*
* each servlet request runs in a separate thread

**The Three Big Lifecycle Moments** (pdf page 124)

Key takeaway

* override `service()` method is never recommended, override `doGet` and `doPost` and other ``doXX` instead`

Source code reference: https://github.com/javaee/servlet-spec/blob/master/src/main/java/javax/servlet/http/HttpServlet.java

