
  //This is called Hoisting in JavaScript 
  //Hoisting is the default behaviour of JavaScript where all the variable and function declarations are moved on top.

  //Example 1
   getName();
   console.log( num );
   let num = 3;
   function getName () {
    console.log("Aadarsh Kumar")
   }
   const name = () => {
     console.log('Aadarsh Kumar')
   }
  console.log(name())

