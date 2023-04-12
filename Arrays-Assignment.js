//1 create an array of strings (has to be of at least length 10)
animals = ["dog", "cat", "rabbit", "horse", "pig", "cow","deer","bear","moose", "fox"]
//2 print out the second element in the array
console.log(animals[1]);
//3 print out the length of the array
console.log(animals.length)
//4 iterate over the array and print out each element
animals.forEach(element => console.log(element));
//5 create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
  // if it is then return that string
  //else continue

   for (let i = 0; i < animals.length; i++){
      if (animals[i] === "fox"){
         // return true;
      }
   }

 //6 remove the last element from the array and then console.log the array

animals.pop();
 console.log(animals);

 //7 remove the first element from the array and then console.log the array

 animals.shift();
 console.log(animals);

 //8 add a string to the end of the array and then console.log the array

animals.push("bull");
console.log(animals);

 // add a string to the beginning of the array and then console.log the array

animals.unshift("ghost");
console.log(animals);

 //8 create another array of 6 veggies 
    //create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]

   veggies = ["squash", "bok choy", "broccoli", "arugula", "celery", "chives"];
   console.log(veggies.slice(2, 4));


 //9 create another array of 4 fruits
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array

   fruits = ["apple", "orange", "watermelon", "banana"];
   fruitsAndVeggies = fruits.concat(veggies);
   console.log(fruitsAndVeggies);

 //10 get the index of one the fruits or veggies in your fruitsAndveggies array

 console.log(fruitsAndVeggies.indexOf("watermelon"));