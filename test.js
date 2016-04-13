var utyls = require('./');
var assert=require('chai').assert;

 var utobj=new utyls(); 
 
 //Tests for isChar
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


//Tests for isInteger


describe("Tests for isInteger->",function(){
   
   it("Passes char",function(){
      
      
      assert.equal(utobj.isInteger('7'),false,"");
       
   });
   
   
   it("Passes String",function(){
      
      assert.equal(utobj.isInteger("787"),false,"");
       
   });
   
   
   it("Passes double/float",function(){
      
      assert.equal(utobj.isInteger(6.78),false,"");
       
   });
   
   it("Passes Integer",function(){
      
      assert.equal(utobj.isInteger(7),true,"");
       
   });
   
   
   
   
   
   
    
});


//TODO: Need More Tests to be written

describe("Tests for leftpad",function(){
   
   it("Without default arguement",function(){
      
       assert.equal(utobj.leftpad("7",3),"**7","");   
   });
   
   it("With default arguement",function(){
      
       assert.equal(utobj.leftpad("7",3,"0"),"007","");
       
   });
   
   it("Passes required length less than string length",function(){
      
      assert.equal(utobj.leftpad("788",2,"6"),"788","");
       
   });
   
   
   it("Passes a string instead of padding character",function(){
      
      assert.equal(utobj.leftpad("776",10,"607"),undefined,"") ;
   });
   
   it("Passes negative length as required  length",function(){
      
      assert.equal(utobj.leftpad("gha",-9),"gha","");
       
   });
   
   
   it("Passes empty string ",function(){
       
      assert.equal(utobj.leftpad("",10),"**********",""); 
   });
   
   it("String and required length",function(){
      
      assert.equal(utobj.leftpad("ThisisTextoflength50",50),"******************************ThisisTextoflength50",""); 
   });
   
   
   
   
   
   
   
    
});




