// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12

// TO DO: More complicated than I thought.

//===========================================================================================================
// FIRST ATTEMPT: (gotta think of something else.)

// function queueTime(customers, n) {
// 	//TODO
// 	let time = 0;

// 	if (n == 1 && customers.length == 0) {
// 		time = 0;
// 	} else if (n == 1 && customers.length > 0) {
// 		customers.forEach((customer) => {
// 			time += customer;
// 		});
// 	} else if (customers.length > n) {
// 	}

// 	return time;
// }

// queueTime([1, 2, 3, 4], 1);

function queueTime(customers, registers) {
	let arr = [];

	for (let i = 0; i < registers; i++) {
		// This lpp[] just makes an array the size of how many registers there are and starts them at 0.
		arr[i] = 0;
		console.log(arr);
	}

	for (let i = 0; i < customers.length; i++) {
		arr[0] += customers[i];
		console.log(`Before sort: ${arr}`);

		arr.sort((a, b) => a - b);

		console.log(arr);
	}

	console.log(arr[arr.length - 1]);
}

queueTime([1, 2, 3, 4, 5], 100);