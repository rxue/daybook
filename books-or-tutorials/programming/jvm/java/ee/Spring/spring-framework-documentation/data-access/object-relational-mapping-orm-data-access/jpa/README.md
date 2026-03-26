# JPA
## Implementing DAOs Based on JPA: `EntityManagerFactory` and `EntityManager`
request a *transactional* `EntityManager`, aka *shared EntityManager*, because it is *shared, thread-safe proxy* for actual *transactional* `EnityManager` with `@PersistenceContext` annotation in a DAO implementation class

> The @PersistenceContext annotation has an optional attribute called type, which defaults to PersistenceContextType.TRANSACTION. You can use this default to receive a shared EntityManager proxy. The alternative, PersistenceContextType.EXTENDED, is a completely different affair. This results in a so-called extended EntityManager, which is not thread-safe and, hence, must not be used in a concurrently accessed component, such as a Spring-managed singleton bean

The quote above implies that the `@PersistenceContext`, i.e. with `TRANSACTION` as `PersistenceContextType` is *shared*, but *thread-safe proxy*
