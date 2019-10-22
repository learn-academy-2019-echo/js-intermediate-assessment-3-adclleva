// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
	console.log("\n 1. ----------------------------")
	const getFirstTenFibArr = () => {
		let fibArr = [1, 1]

		for (let i = 2; i < 10; i++) {
			let newNum = fibArr[i - 1] + fibArr[i - 2]
			fibArr.push(newNum)
		}

		return fibArr
	}

	console.log(getFirstTenFibArr());

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
console.log("\n 2. ----------------------------")

const oddChecker = arr => {
	return arr.filter(element => {
		return typeof element == "number" && (element % 2 === 1 || element % 2 === -1 )
	})
}

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))
// 3. Given the object below, complete the console.log to find specific information:
console.log("\n 3. ----------------------------")

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle["gear"][2])

// Log the PSI:
console.log(bicycle["wheels"]["specs"][2])

// 4. Write a function that takes in an array and returns an array in reverse order.
console.log("\n 4. ----------------------------")
var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

const reverseArr = array => {
	return array.reduce((accumVal, currentVal) => {
		return [currentVal, ...accumVal]
	},[])
}

console.log(reverseArr((originalArray1)))
console.log(reverseArr((originalArray2)))

// 5. Write the code that would make this test pass.
console.log("\n 5. ----------------------------")
// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

const multTwo = arr => {
	return arr.map(num => {
		return num * 2
	})
}

console.log(multTwo([3, 4, 5]))
console.log(multTwo([23, -9, 0]))
console.log(multTwo([4.5, -4.5, 12]))

// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
console.log("\n 6. ----------------------------")
var ourString = "Hello Learn Students!"
// Expected output: 3

const letterCounter = (string, letter) => {
	return string.split("").filter(currentLetter => {
		return currentLetter.toLowerCase() == letter.toLowerCase()
	}).length
}

console.log(letterCounter(ourString, 'l'));

// 7. Create a function that takes in a string of a single word and returns the middle letter of the word.
// If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

console.log("\n 7. ----------------------------")

const findMiddleLetter = word => {
	const middle = Math.floor(word.length / 2)
	return word.length % 2 == 0 ? word[middle] + word[middle - 1] :  word[middle]
}

console.log(findMiddleLetter(middleLetters1));
console.log(findMiddleLetter(middleLetters2));

// 8. Write a program to get the area of a sphere using object classes.
//Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
console.log("\n 8. ----------------------------")

var radius1 = 1 // => ~12.57
var radius2 = 12 // => ~1908.56
var radius3 = 3.14 // => ~123.9

class Sphere {
	constructor(radius) {
		this.radius = radius
	}
	areaOfSphere() {
	return (4 * Math.PI * Math.pow(this.radius, 2)).toFixed(3)
	}
}
const sphere1 = new Sphere(1)
const sphere2 = new Sphere(12)
const sphere3 = new Sphere(3.14)
console.log(sphere1.areaOfSphere())
console.log(sphere2.areaOfSphere())
console.log(sphere3.areaOfSphere())

// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.
console.log("\n 9. ----------------------------")

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const { doors, transmission } = myCar.specs
console.log(doors)
console.log(transmission)

// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
console.log("\n 10. ----------------------------")

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const totalArrSum = arr => {
	if (arr.length == 0) {
	return arr
	}

	let sumsArr = [arr[0]];

	for (let i = 1; i < arr.length; i++) {
		let currentSumNum = sumsArr[sumsArr.length - 1]
		let	 currentNum = arr[i]
		let pairSum = currentNum + currentSumNum
		sumsArr.push(pairSum)
	}

	return sumsArr
}

console.log(totalArrSum((numbersToAdd1)))
console.log(totalArrSum((numbersToAdd2)))
console.log(totalArrSum((numbersToAdd3)))
