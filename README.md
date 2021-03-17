# Query Builder

<hr>

## Project

Query builder created using Regex, ECMAScript modules, Test Driven Development and Design Patterns during the preheating week JavaScript Expert 3.0.

<hr>

## How to Use

Just `git clone` the project and `npm i`.
We already have a mock database that we can use as example.
In the `index` file we can set the methods and parameters tha we wanna filter in the data base.
For now we have the following methods:

* limit(${qnt}): The specified the amount of results.
* where({ property: ${a regex expressiont to filter} }): Filter a determinated field and verify if a value is in he.
* select(['name', 'company', 'phone', 'category']) : Filter the specific fields in the array.
* orderBy('${propertie}') : Order the results using the property passed.

We also can run `npm t` to see all the tests passing.

## Patterns used

* Builder
* Fluent Interface
