// // Loop from 1 to 100 and log each number to the console
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// /**
//  * Continuously prompts the user to guess a number until they guess 7.
//  * Provides feedback on whether the guess is too high, too low, or correct.
//  */
// while (true) {
//   let num = prompt("Guess a number");

//   // Check if the guessed number is 7
//   if (num == 7) {
//     alert("You guessed correctly");
//     break; // Exit the loop if guessed correctly
//   } else if (num > 7) {
//     alert("too high"); // Inform the user that the guess is too high
//   } else if (num < 7) {
//     alert("too low"); // Inform the user that the guess is too low
//   } else {
//     alert("not a number"); // Inform the user that the input is not a number
//   }
// }

// for(let i = 10 ;i <= 100 ; i++){
//   if (i % 2 == 0){
//     console.log(i + " even")
//   }else {
//     console.log(i + " odd")
//   }
// }
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));
// let result = num1 + num2;

// window.alert("result is" +result);

document.querySelector(".btn").addEventListener("click", () => {
  const name = prompt("Enter your name");
  if (name === "") {
    alert("Please enter your name");
  } else {
    alert(`Hello ${name}`);
    const age = prompt("Enter your age");
    if (age < 18) {
      alert("You are too young");
    } else if (age > 18) {
      alert("You are ok");
    }
  }
});
