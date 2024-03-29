# Chapter 1: Introduction to EJB 3.2 Architecture and CDI Services
## An Introduction to EJB
### What is EJB
#### Core Features of EJB Development Model
##### Declarative Metadata
If the same metadata is defined both in annotation and in XML, the XML takes precedence

##### *Configuration by Exception*
Intelligent default:
* transactional behavior of session bean methods
* name of tables and columns that map to a JPA entity

There will be exception only when there is no default behavior, this is the *configuration by exception*

##### Transacitonality
EJB acts as a JTA *transaction manager* to EJBs.

# Chapter 2: EJB Session Beans
## Introduction to Session Beans
### When Do You Use Session Beans
DAO classes don't need to be session beans because they will be used in the EJB application service layer

#### 3-Tier Architecture for a Web Application
## Stateless Session Beans
### The Business Interface
#### Dependeny Injection
## Singleton Session Beans
### Concurrency Management
#### Container-Managed Concurrency
If `@Lock` is not explicitly on a singleton session class, the default is `@Lock(LockType.WRITE)`


# Chapter 8: TRANSACTION MANAGEMENT
## Transaction Support in EJB
### EJB Transaction Services
Operations in transactional context:
* CRUD on JPA entities
* JDBC operations
* sending JMS messages to queue
* executing MDBs
* firing e-mail requests
* invoking Web services
* others


## Session Bean Transactional Behavior in the Service Model
### Container-Managed Transaction (CMT) Demarcation
Available by default to
 * *session beans*
 * *MDBs*
#### The `EJBContext.setRollbackOnly`and `getRollbackOnly` Methods
In case of CMT, `MessageDrivenContext` (sub-class of `EJBContext`) methods can be used in the following ways:
* `setRollbackOnly` - used for *error handling* to **ensure that the container will not commit the transaction.**
* `getRollbackOnly`

label: `1Z0-900`
