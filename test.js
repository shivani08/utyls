var utyls = require('./');
var assert=require('chai').assert;


//TODO: Add More Tests eg: Create a custom datatype and try to pass it.
describe('Tests for isChar->',function(){
   
   var utobj=new utyls(); 
it('Passes Integer',function(){
    
   assert.equal(utobj.isChar(7),false,""); 
    
});

it('Passes Char',function(){
    
   assert.equal(utobj.isChar('g'),true,"");  
    
});


it('Passes String',function(){
   
   
   assert.equal(utobj.isChar('string'),false,"")
    
});


it('Passes float/double',function(){
   
   
   assert.equal(utobj.isChar(5.67),false,"");
    
});



});




