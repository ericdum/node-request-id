top speed to generate a unique ID that's never repeat

[![https://img.shields.io/travis/ericdum/node-request-id.svg](https://img.shields.io/travis/ericdum/node-request-id.svg)](https://travis-ci.org/ericdum/node-request-id)
[![Coverage Status](https://img.shields.io/coveralls/ericdum/node-request-id.svg)](https://coveralls.io/r/ericdum/node-request-id?branch=master)
[![npm](https://img.shields.io/npm/v/requestid.svg)](https://www.npmjs.com/package/requestid)
[![npm](https://img.shields.io/npm/dm/requestid.svg)](https://www.npmjs.com/package/requestid)

### Generate A Unique ID Like: UsH0mUQ-AKABBvCI-NEF-A

Every request will increase last fragment, others are fixed.

* first is a microtime of start
* second is the ip each 2 digit indicate a ip fragment 
* third is the pid
* last is the self-increase id

### Usage

```
requireID = require('requestid')
requireID() // UsH0mUQ-AKABBvCI-NEF-A
```
