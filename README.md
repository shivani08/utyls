[![Build Status](https://travis-ci.org/shivani08/utyls.svg?branch=master)](https://travis-ci.org/shivani08/utyls)
[![npm version](https://badge.fury.io/js/utyls.svg)](https://badge.fury.io/js/utyls)
[![Coverage Status](https://coveralls.io/repos/github/shivani08/utyls/badge.svg?branch=master)](https://coveralls.io/github/shivani08/utyls?branch=master)
# utyls

##1. What is utyls?
utyls is aimed to provide a collection of JavaScript utility functions. 
##2. How to install utyls?
You can install utyls by using npm,  type `npm install utyls`, npm will fetch utyls and installs it.

##3. Basic Usage
```javascript
var Utyls=require('utyls');

var utyls=new Utyls();

console.log(utyls.leftpad('7',5))
```

##4. API
####1.leftpad(str:String,len:Integer,paddingchar:Character)
  - leftpad function will add padding characters to the beginning of the string to make it length equal to len variable passed as 2nd parameter. For example 
    `utyls.leftpad('7',3,'0')` will produce 007
  - We use `*` as default character. If you do not specify a padding character, the string will be prefixed with `*`. 
    `utyls.leftpad('7',5)` will produce `****7`



##5. Contribute
Anybody can contribute to this repository. Initiate pull requests and we will look into it. 
Contribution guidelines coming soon.
