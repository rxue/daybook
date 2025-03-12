# 11. JPA Reference Guide
## [11.4. Container-managed entity manager](https://docs.wildfly.org/35/Developer_Guide.html#container-managed-entity-manager)
**key takeaway**

* the `EntityManager` injected by the Java EE container is a Java *proxy*. The proxy will

> be assoicated with an underlying `EntityManager` instance, for each started transaction and is *flushed/closed* when the JTA transaction commits.


* the proxy starts to search for an underlying `EntityManager` instance, either new or existing, **when the application code invokes `EntityManager`.anyMethod()** (I previously thought that the `EntityManager` field injected by `@PerstenceContext` annotation is initialized when the residing bean, either EJB or CDI, is initialized, but this is wrong)

the above implies: the lifecycle of the `EntityManager` instance with type `TRANSACTION` is tied to the transaction lifecycle
