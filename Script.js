
  //This is called Hoisting in JavaScript 
  //Hoisting is the default behaviour of JavaScript where all the variable and function declarations are moved on top.

  //Example 1
  
  //  getName(); // In Simple function output is show 
  //  name(); //But In Arrow function output in not show because the name of the function is store in datatype
  //  let num = 3; // This is also show error.
  //  function getName () {
  //   console.log("Aadarsh Kumar")
  //  }
  //  const name = () => {
  //    console.log('Aadarsh')
  //  }

     // Conversion of Number into String 
       let number = 343;
       let StringNumber = String(number);
       console.log(StringNumber)
       console.log(typeof StringNumber)
  
       console.log( 3**3 ); // Power of number --> 27

        let x = 3;
        let y = x++;

        console.log( `x: ${x}, y: ${y}` );   // x: 4, y: 3

        let a = 3;
        let b = ++y;

        console.log( `a: ${a}, b: ${b}`);    // x: 3, y: 4