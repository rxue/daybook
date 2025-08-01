# Chapter 5: Database Programming
## 5.4. Working with JDBC Statements
### 5.4.1. Executing SQL Statements
#### `java.sql.Statement`
**Takeaway on `ResultSet getResultSet()` method**
`getResultSet()` should be **called only once per executed statement**

Typical use case is when `execute(String sqlStatement)` is called beforehands and returns `true`, which means `ResultSet` is generated under the hood. `getResultSet()` comes into play to get the generated `ResultSet()`

**Practical mistake** I made:

```
executeTransaction("select * from explanation", preparedStatement -> {
            try (ResultSet resultSet = preparedStatement.getResultSet()) {
                int rowCount = 0;
                while (resultSet.next())
                    rowCount++;
                assertEquals(2, rowCount);
            }
        });
```
In the code above, the `prepatedStatement` is retrieved through `connection.prepareStatement("select * from explanation")`, and then the `getResultSet()` is **called without execution** , thus returned `null`, which is not expected.

Correct way should be to use `preparedStatement.executeQuery()` instead to get the `ResultSet`:

```
executeTransaction("select * from explanation", preparedStatement -> {
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                int rowCount = 0;
                while (resultSet.next())
                    rowCount++;
                assertEquals(2, rowCount);
            }
        });
```

My own comment: This might be the early design flaw of the `Statement` interface

## 5.9. Transactions
### 5.9.3 Batch Updates
* `Statement#addBatch(stringCommand)`
* `Statement#executeBatch()`

## 5.10. Connection Management in Web and Enterprise Applications
`DataSource` is related to

 * `jndi`
 * application server
 * *connection pool*

# Chapter 7: Internationalization
## 7.1 Locales
### 

# Chapter 8: Scripting, Compiling, and Annotation Processing
## 8.5 Standard Annotations
### 8.5.1 Annotations for Compilation
Practical tips about `@Deprecated` : since Java 9, this annotation has 2 optional elements `forRemoval` and `since`

### 8.5.2 Meta-Annotations
Element types of target annotation

Element Type  | Annotation Applies to
--------------|--------------------------
`PARAMETER`   | Method or constructor parameters

# Chapter 9: The Java Platform Module System
## 9.1 The Module Concept
2 advatanges of using the Java Platform Module System:

1. strong encapsulation
2. reliable configuration

## 9.2 Naming Modules
A module is a collection of packages

*reverse domain name* convention example: 

`org.slf4j` module has packages:
* `org.slf4j`
* `org.slf4j.spi`
* `org.slf4j.event`
* `org.slf4j.helpers`

## 9.3 The Modular "Hello, World" Program
"unnamed package"

`package-info.java` is located in the based directory

*module path* with `--module-path`

# Chapter 10: Security
## Class Loaders
Debugging of the code demo, https://github.com/rxue/java-from-scratch-to-advanced/blob/main/src/main/java/rx/book/corejava/volume2/ch10/ClassLoaderDemo.java , shows that the parent *class loader* of `PlatformClassLoader` is `BootClassLoader` - the *bootstrap class loader*
![parent of PlatformClassLoader is BootClassLoader](https://user-images.githubusercontent.com/3033388/265276131-9679ad16-ddaa-492c-a8b6-ace581a47399.png)
However, 

> There is no `ClassLoader` object corresponding to the bootstrap class loader.

![parent of PlatformClassLoader is null to client](https://user-images.githubusercontent.com/3033388/265276144-e4e11a05-cbee-4552-8d77-88317a3b18ab.png)
50G
