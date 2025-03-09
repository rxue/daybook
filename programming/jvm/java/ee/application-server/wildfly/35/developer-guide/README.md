# Developer Guide (WildFly 35.0.0 Final)
## 11. JPA Reference Guide
### 11.4 [Container-managed entity manager](https://docs.wildfly.org/35/Developer_Guide.html#container-managed-entity-manager)

Key takeaways

* inject with `@PersistenceContext` is *thread-safe* due to the proxy mechanism in WildFly
