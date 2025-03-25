# [maven-failsafe-plugin](https://maven.apache.org/surefire/maven-failsafe-plugin/index.html)
By default `maven-failsafe-plugin` is not bound to the *Maven lifecycle* => By default without adding `maven-failsafe-plugin` explicitly to `pom.xml` no integration tests can be executed

Workshop for the proof:
Make a simple Maven project without adding any *plugin* to `pom.xml`, then run `mvn help:effective-pom`
Expected Result: output of `mvn help:effective-pom` includes only the `maven-surefire-plugin`, thus there is not result when searching from the `failsafe` keyword
## Goals Overview

NOTE that 

> `failsafe:verify` verifies that the integration tests of an application passed

Try by removing this `goal` in the `maven-failsafe-plugin` configuration in `pom.xml` with one failuing IT tests on purpose, this trial would get `BUILD SUCCESS` result => `verify` *goal* is a must 

## [Skipping Tests](https://maven.apache.org/surefire/maven-failsafe-plugin/examples/skipping-tests.html)
`skipITs` property is `false` by default

NOTE! `maven-failsafe-plugin` probably does not support environment variables - `environmentVariables` -  configuration like the `maven-surefire-plugin` does
reference: https://stackoverflow.com/questions/77443445/how-to-configure-environment-variables-maven-failsafe-plugin
