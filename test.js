var utyls = require('./');

var x = new utyls();


testsFailed = 0;
//Tests for isChar

if (x.isChar(7) !== false)
    testsFailed++;

if (x.isChar('g') !== true)
    testsFailed++;

if (x.isChar('ghj') !== false)
    testsFailed++;

if (x.isChar(7.65) !== false)
    testsFailed++;

//TODO: Tests for inherited datatypes for isChar


//Tests for leftpad

if (x.leftpad("23", 5) !== "***23")
    testsFailed++;

if (x.leftpad("ck", 4, '#') !== "##ck")
    testsFailed++;


//TODO: Add More Tests






console.log("Tests Failed: " + testsFailed);
