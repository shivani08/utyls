var utyls = require('./');
var assert=require('chai').assert;

 var utobj=new utyls(); 
 
//TODO: Add More Tests eg: Create a custom datatype and try to pass it.
describe('Tests for isChar->',function(){
   
  
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


describe("Tests for leftpad",function(){
   
   it("Without default arguement",function(){
      
       assert.equal(utobj.leftpad("7",3),"**7","");   
   });
   
   it("With default arguement",function(){
      
       assert.equal(utobj.leftpad("7",3,"0"),"007","");
       
   });
   
   
   
   
   
   
    
});




