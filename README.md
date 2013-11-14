# peer-module

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

require peer dependencies

## Motivation

Requiring dependencies that are not modules leads to a sprawl of paths that are hard to keep track of, making refactoring difficult. The idea behind peer-module is that we go back to declaring the peer module that we are interested in using throughout our code by name. We rely on the configuration of this peer dependency module to allow us to refactor on mass. This could be for example, installing peers on a server and resolving them through a managed system of installed dependencies, or assuming the default behavior of requiring "../moduleName"

## Example

```js
var peer = require("peer-module")()

var template = peer("template")

// requires the "../template" module, which we want to share between multiple route handlers
```

## Installation

`npm install peer-module`

## Contributors

 - Matt-Esch

## MIT Licenced

  [1]: https://secure.travis-ci.org/Matt-Esch/peer-module.png
  [2]: https://travis-ci.org/Matt-Esch/peer-module
  [3]: https://badge.fury.io/js/peer-module.png
  [4]: https://badge.fury.io/js/peer-module
  [5]: https://coveralls.io/repos/Matt-Esch/peer-module/badge.png
  [6]: https://coveralls.io/r/Matt-Esch/peer-module
  [7]: https://gemnasium.com/Matt-Esch/peer-module.png
  [8]: https://gemnasium.com/Matt-Esch/peer-module
  [9]: https://david-dm.org/Matt-Esch/peer-module.png
  [10]: https://david-dm.org/Matt-Esch/peer-module
  [11]: https://ci.testling.com/Matt-Esch/peer-module.png
  [12]: https://ci.testling.com/Matt-Esch/peer-module
