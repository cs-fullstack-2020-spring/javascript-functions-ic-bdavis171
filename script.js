// //Exercise 1:

// //Ask the user to enter two numbers:
// let num1 = parseInt(prompt('Enter a number'));
// let num2 = parseInt(prompt('Enter another number'));

// //Create a function that takes the two numbers and returns the sum
// function addition(a,b) {
//     return a + b;
// }

// //Print the sum of the numbers in to the console
// console.log(`The sum of ${num1} and ${num2} is ${addition(num1,num2)}`);

// //Exercise 2:

// //Create a function that takes any array and prints each element in the array
// function printArray(array){
//     for (let i =0;i<array.length;i++){
//         console.log(array[i]);
//     }
// }

// test_array = [1,2,3,4,5];
// printArray(test_array);

//Exercise 3:

//Create a function that asks the user to enter a name until they enter q or Q
function enterName() {
    let name = '';
    while ( !(name == 'q' || name == 'Q')) {
        
        name = prompt('Enter a name');
        if (name == 'Kevin') {
            alert('Cool Dude');
        }
    }
}


enterName();