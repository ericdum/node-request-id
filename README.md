top speed to generate a unique ID that's never repeat

[![https://img.shields.io/travis/ericdum/node-shared-memory.svg](https://img.shields.io/travis/ericdum/node-shared-memory.svg)](https://travis-ci.org/ericdum/node-shared-memory)
[![Coverage Status](https://img.shields.io/coveralls/ericdum/node-shared-memory.svg)](https://coveralls.io/r/ericdum/node-shared-memory?branch=master)
[![npm](https://img.shields.io/npm/v/shared-memory.svg)](https://www.npmjs.com/package/shared-memory)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/shared-memory)

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
