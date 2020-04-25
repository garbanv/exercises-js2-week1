/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/

function greet(){
    console.log("Hellow everyone");
  }
  var person = {
      name: "Alice",
      age: 25,
      greet:function (){
      return "Hellow everyone";
      }
  };
  
  
  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  
  console.log("Expected result: Hello everybody. Actual result: " + person.greet());