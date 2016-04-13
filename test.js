var utyls = require('./');
var assert=require('chai').assert;

 var utobj=new utyls(); 
 
 //Tests for isChar
//TODO: Add More Tests eg: Create a custom datatype and try to pass it.
describe('Tests for isChar->',function(){
   
  
it('Passes Integer',function(){
    
   assert.strictEqual(utobj.isChar(7),false,""); 
    
});

it('Passes Char',function(){
    
   assert.strictEqual(utobj.isChar('g'),true,"");  
    
});


it('Passes String',function(){
   
   
   assert.strictEqual(utobj.isChar('string'),false,"")
    
});


it('Passes float/double',function(){
   
   
   assert.strictEqual(utobj.isChar(5.67),false,"");
    
});
});


//Tests for isInteger


describe("Tests for isInteger->",function(){
   
   it("Passes char",function(){
      
      
      assert.strictEqual(utobj.isInteger('7'),false,"");
       
   });
   
   
   it("Passes String",function(){
      
      assert.strictEqual(utobj.isInteger("787"),false,"");
       
   });
   
   
   it("Passes double/float",function(){
      
      assert.strictEqual(utobj.isInteger(6.78),false,"");
       
   });
   
   it("Passes Integer",function(){
      
      assert.strictEqual(utobj.isInteger(7),true,"");
       
   });
   
   it("Passes string with ascii characters",function(){
    
    assert.strictEqual(utobj.isInteger("utyls"),false,"");
    
   });
   
   it("Passes fraction resulting in integer",function(){
    
   assert.strictEqual(utobj.isInteger(21/3),true,"");
   
   });
   
   it("Passes fraction resulting in double",function(){
    
   assert.strictEqual(utobj.isInteger(22/3),false,"");
   
   });
   
   it("Passes string with special characters",function(){
    
   assert.strictEqual(utobj.isInteger('*$'),false,"");
   
   });
   
   it("Passes special character",function(){
    
   assert.strictEqual(utobj.isInteger('*'),false,"");
   
   });
   
   it("Passes character",function(){
    
   assert.strictEqual(utobj.isInteger('u'),false,"");
   
   });
   
   it("Passes Zero",function(){
    
   assert.strictEqual(utobj.isInteger(0),true,"");
   
   });
   
   it("Passes Negative Integer",function(){
    
   assert.strictEqual(utobj.isInteger(-7),true,"");
   
   });
   
   it("Passes Negative double/float",function(){
    
   assert.strictEqual(utobj.isInteger(-7.84),false,"");
   
   });
   
   it("Passes negative fraction resulting in integer",function(){
    
   assert.strictEqual(utobj.isInteger(-21/7),true,"");
   
   });
   
   it("Passes negative fraction resulting integer t2",function(){
    
   assert.strictEqual(utobj.isInteger(-21/-3),true,"");
   
   });
   
   
   it("Passes negative fraction resulting in double",function(){
    
   assert.strictEqual(utobj.isInteger(-22/7),false,"");
   
   });
   
   
    
});


//TODO: More Tests to be written

describe("Tests for leftpad",function(){
   
   it("Without default arguement",function(){
      
       assert.strictEqual(utobj.leftpad("7",3),"**7","");   
   });
   
   it("With default arguement",function(){
      
       assert.strictEqual(utobj.leftpad("7",3,"0"),"007","");
       
   });
   
   it("Passes required length less than string length",function(){
      
      assert.strictEqual(utobj.leftpad("788",2,"6"),"788","");
       
   });
   
   
   it("Passes a string instead of padding character",function(){
      
      assert.strictEqual(utobj.leftpad("776",10,"607"),undefined,"") ;
   });
   
   it("Passes negative length as required  length",function(){
      
      assert.strictEqual(utobj.leftpad("gha",-9),"gha","");
       
   });
   
   
   it("Passes empty string ",function(){
       
      assert.strictEqual(utobj.leftpad("",10),"**********",""); 
   });
   
   it("Passes String and required length",function(){
      
      assert.strictEqual(utobj.leftpad("ThisisTextoflength50",50),"******************************ThisisTextoflength50",""); 
   });
   
   
   it("Passes string and a double value as required length",function(){
    
      assert.strictEqual(utobj.leftpad("",2.34),undefined,"");
    
   });
   
   it("Passes string and a required double value with a padding character",function(){
     
     assert.strictEqual(utobj.leftpad("",2.34,'0'),undefined,"");
   });
   
   it("Passes string and fraction(when solved integer) as required length",function(){
    
    assert.strictEqual(utobj.leftpad("",21/7),"***","");
   });
   
   it("Passes string and fraction(when solved double) as required length",function(){
    
    assert.strictEqual(utobj.leftpad("",22/7),undefined,"");
   });
   
   

    
});




