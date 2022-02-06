Node Clean Architecture
=======================

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

clean architecture diagram - dependencies direction are from outside in.
[source](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)


Few words about this diagram and how to read it:

-   Dependency - the dependency direction is from the outside in. meaning that
    the Entities layer is independent and the Frameworks layer depend on all the
    other layers.

-   Entities - contains all the business entities that construct our
    application.

-   Use Cases - This is where we centralize our logic. Each use case
    orchestrates all of the logic for a specific business use case.

-   Controllers and Presenters - Our controller, presenters, and gateways are
    intermediate layers. You can think of them as an entry and exit gates to the
    use cases .

-   Frameworks - This layer has all the specific implementations. The database,
    the web frameworks, error handling etc.
    Robert C. Martin describes this layer :
    *“This layer is where all the details go. The Web is a detail. The database
    is a detail. We keep these things on the outside where they can do little
    harm.”*


## Getting Started

### Dependencies
* mongoDb - you need to provide a valid mongDb connection string.
add a new environment variable named CLEAN_NEST_MONGO_CONNECTION_STRING
```
export CLEAN_NEST_MONGO_CONNECTION_STRING='valid mongoDB connection string'
```
### Installing
```
npm install
```
### Executing program

```
npm start
```
## Acknowledgments
Inspiration, code snippets, etc.
* [clean-architecture-node](https://github.com/royib/clean-architecture-node)
* [Node Clean Architecture — Deep Dive](https://betterprogramming.pub/node-clean-architecture-deep-dive-ab68e523554b)
