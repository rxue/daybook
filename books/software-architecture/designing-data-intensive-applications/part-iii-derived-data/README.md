# Part III. Derived Data
## Chapter 11. Stream Processing
### Transmitting Event Streams
*event* : details of something that happened at some point in time

* usually contains a *timestamp*
* the thing that happened might be an action that a user took. example: viewing a page, making a purchase
* an event might be encoded as a text string like *JSON*, or some binary. Such encoding allows you to store an event, e.g. by inserting it into a relational table, or to a document database

better for *consumers* to be notified when new events appear

### Databases and Streams
#### Event Sourcing

> storing all changing to the application state as a log of changed event

*immutable events* are written to an *event log*:

* event store is *append only*, i.e. updates and deletes are discouraged and prohibited
* event are designed to reflect things that happened at the *application level*

##### Deriving current state from the event log

> applications that use event sourcing need to take the log of events (representing the data written to the system) and transform it into application state that is suitable for showing to a user (the way in which data is read from the system [47]). This transformation can use arbitrary logic, but it should be deterministic so that you can run it again and derive the same application state from the event log.

* Event in event sourcing typically express the intent of the user action
* system is able to store all raw events for ever and process the full event log wheneber required

##### Commands and events

* when a request from a user first arrives, it is initially a *command*
* command might fail due to conditional violation => the command has to be validated, and only valid command can become an duable and *immutable* event, i.e. *fact*
* any validation of a command needs to happen synchronously, before it becomes an event. Example: a serializable transaction that *atomically* validates the command and publishes the event
