
  //This is called Hoisting in JavaScript 
  //Hoisting is the default behaviour of JavaScript where all the variable and function declarations are moved on top.

  //Example 1
  
   getName(); // In Simple function output is show 
   name(); //But In Arrow function output in not show because the name of the function is store in datatype
   let num = 3; // This is also show error.
   function getName () {
    console.log("Aadarsh Kumar")
   }
   const name = () => {
     console.log('Aadarsh')
   }

name()
  