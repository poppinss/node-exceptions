Node Exceptions

![](http://i1117.photobucket.com/albums/k594/thetutlage/poppins-1_zpsg867sqyl.png)

[![Version](https://img.shields.io/npm/v/node-exceptions.svg?style=flat-square)](https://www.npmjs.com/package/node-exceptions)
[![Build Status](https://img.shields.io/travis/poppinss/node-exceptions/master.svg?style=flat-square)](https://travis-ci.org/poppinss/node-exceptions)
[![Coverage Status](https://img.shields.io/coveralls/poppinss/node-exceptions/master.svg?style=flat-square)](https://coveralls.io/github/poppinss/node-exceptions?branch=master)
[![License](https://img.shields.io/npm/l/node-exceptions.svg?style=flat-square)](https://opensource.org/licenses/MIT)

Throwing errors in Javascript does not give much information about the error type as it is really hard to throw custom exceptions. Node Exceptions is a tiny wrapper which will let you extend the Error class and throw custom errors.

## Why custom errors
Errors are thrown anywhere inside the code and handling them properly is required. For example you have an HTTP application, which can throw multiple errors and in order to handle those errors gracefully, you need to know the error types or their names.

```javascript
switch (err.name) {
  case 'HttpException':
    // do something
  case 'RunTimeException':
    // do something else
}
```


## Install

```bash
npm i --save node-exceptions
```

## Creating custom errors

```javascript
const NE = require('node-exceptions')

class MyCustomError extends NE.LogicalException {}

try {
  throw new MyCustomError('Something bad happened')
} catch (e) {
  console.log(e.status) // equals 500
  console.log(e.name) // equals MyCustomError
  console.log(e.message) // Something bad happened
  console.log(e.stack) // Error stack with correct reference to filepath and linenum
  console.log(e.toString()) // MyCustomError: Something bad happened
}
```

## Custom error status
It is also possible to have a custom error status when throwing exceptions.

```javascript
const NE = require('node-exceptions')

class HttpException extends NE.LogicalException {}

try {
  throw new HttpException('Page not found', 404)
} catch (e) {
  console.log(e.status) // equals 404
}
```

Also `NE` comes with some commonly required Exception classes which includes.

#### DomainException 
When something excepted has failed. For example image upload mismatch extension.

```javascript
throw new NE.DomainException()
```

#### InvalidArgumentException
Method arguments are invalid or incomplete.

```javascript
throw new NE.InvalidArgumentException()
```

#### RangeException
Error caused due to arithmetic operations.

```javascript
throw new NE.RangeException()
```

#### RuntimeException
An error occured after all required checks.

```javascript
throw new NE.RuntimeException()
```

#### HttpException
Http specific errors.

```javascript
throw new NE.HttpException()
```
