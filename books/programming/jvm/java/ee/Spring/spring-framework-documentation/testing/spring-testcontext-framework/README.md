# Spring TestContext Framework
## Context Management
### [Context Caching](https://docs.spring.io/spring-framework/reference/testing/testcontext-framework/ctx-management/caching.html)
**Test suites and forked processes**
> The Spring TestContext framework stores application contexts in a static cache. This means that the context is literally stored in a static variable. In other words, if tests run in separate processes, the static cache is cleared between each test execution, which effectively disables the caching mechanism.
## [Transaction Management](https://docs.spring.io/spring-framework/reference/testing/testcontext-framework/tx.html)
### Enabling and Disabling Transactions
> Note that `@Transactional` is **not supported** on test lifecycle methods - for example, methods annotated with *JUnit Jupiter*’s `@BeforeAll`, `@BeforeEach`, etc.
