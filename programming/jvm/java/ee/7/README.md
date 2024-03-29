# Java EE 7

## [Breakdown](https://www.oracle.com/java/technologies/javaee/javaeetechnologies.html#javaee7)
### Web Application Technologies

`groupId`       | `artifactId`      |Version  |Description                                                    |Reference
----------------|-------------------|---------|-------------------------------------------------------------- |----------------------------
`javax.servlet` |`javax.servlet-api`|3.1      |Servlet API                                                    | ?
`org.glassfish` |`java.faces`       |2.2      |including both API and implementation, and source code checked |[javaserverfaces-spec](https://javaee.github.io/javaserverfaces-spec/)
`org.hibernate` |`hibernate-core`   |5.2      |Implementation of JPA 2.1                                      |<ul><li><a href="https://hib    ernate.org/orm/releases/">Java EE 7 > Java Persistence API</a></li><li><a href="https://hibernate.org/orm/releases/">Hibernate Releases</a></li></ul>

### Enterprise Application Technologies

**Technologies**	| **Version** | **JSR** | **Short Description**		| Reference Implementation							| Recommanded Tutorial
------------------------|-------------|---------|-------------------------------|-------------------------------------------------------------------------------|--------------------------
Batch Applications	| ?	      | 352	| Batch processing		| https://github.com/jberet/jsr352/tree/1.0.2.Final/jberet-core (not sure)	| https://www.baeldung.com/java-ee-7-batch-processing

### [Tutorial Examples](https://github.com/javaee/tutorial-examples)

## [Schema Resources](http://xmlns.jcp.org/xml/ns/javaee/#7)

## Summary
### Java EE 7 *Web Profile*

NOTE!
 * *WebSocket* is part of the web profile
 * *JMS* is not part of the web profile

### POJO with *no-arg* constructor in Java EE
WebSocket endpoint with `@ServerEndpoint`

### Container-Managed Transactions
Assume client C calls a method on B

`javax.ejb`                                                           | If call from C is already part of a transaction                                                         | If call from C is not part of a transaction
----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|---------------
`@TransactionAttribute(value=TransactionAttributeType.MANDATORY)`     | call to B is part of C's transaction                                                                    | `EJBException`
`@TransactionAttribute(value=TransactionAttributeType.REQUIRES_NEW)`  | C's transaction is suspended while the container creates a new transaction for the call to B be part of | The container creates a new transaction for the call to B to be part of
`@TransactionAttribute(value=TransactionAttributeType.REQUIRED)`      | call to B is part of C's transaction                                                                    | The container creates a new transaction for the call to B to be part of
`@TransactionAttribute(value=TransactionAttributeType.SUPPORTS)`      | call to B is part of C's transaction                                                                    | Invocation to B's method proceeds with no transaction
`@TransactionAttribute(value=TransactionAttributeType.NOT_SUPPORTED)` | C's transaction is suspended while the call to B proceeds with no transaction                           | Invocation to B's method proceeds with no transaction
`@TransactionAttribute(value=TransactionAttributeType.NEVER)`         | Invocation to B's method throws an `EJBException`                                                       | Invocation to B's method proceeds with no transaction

### Cross-Reference between ejb transactions and JTA
`javax.ejb`                                                           | JTA - `javax.transaction`
----------------------------------------------------------------------|------------------------------------------------------
`@TransactionAttribute(value=TransactionAttributeType.MANDATORY)`     | `@Transactional(Transactional.TxType.MANDATORY)`
`@TransactionAttribute(value=TransactionAttributeType.REQUIRES_NEW)`  | `@Transactional(Transactional.TxType.REQUIRES_NEW)`
`@TransactionAttribute(value=TransactionAttributeType.REQUIRED)`      | `@Transactional(Transactional.TxType.REQUIRED)`
`@TransactionAttribute(value=TransactionAttributeType.SUPPORTS)`      | `@Transactional(Transactional.TxType.SUPPORTS)`
`@TransactionAttribute(value=TransactionAttributeType.NOT_SUPPORTED)` | `@Transactional(Transactional.TxType.NOT_SUPPORTED)`
`@TransactionAttribute(value=TransactionAttributeType.NEVER)`         | `@Transactional(Transactional.TxType.NEVER)`

### Default Container-Managed Transaction in EJB and JTA
In the context of *EJB*
> [By default, if no transaction demarcation is specified, enterprise beans use container-managed transaction demarcation.](https://docs.oracle.com/javaee/7/tutorial/transactions003.htm)

whereas 
> JTA 1.2 introduces the `@javax.transaction.Transactional` annotation. It enables an application to declaratively control transaction boundaries on CDI-managed beans, as well as classes defined as managed beans, such as *servlets*, *JAX-RS resource* classes, and *JAX-WS service endpoints*.

Reference: Java EE 7 Essentials > Chapter 12 Java Transaction > Container-Managed Transactions

To sum up, JTA annotation `@Transactional` is equivalent to `@Transactional(TxType.REQUIRED)` and, its counterpart in EJB context is the EJB state annotation with or without `@TransactionAttribute(value=TransactionAttributeType.REQUIRED)`
 

