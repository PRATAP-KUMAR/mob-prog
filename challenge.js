#!/usr/bin/gjs

const reverseString = (word) => {
	return word.split("").reverse().join("") 
}

console.log(reverseString("hello world"))

//

const reverseStringTraditional = (word) => {
	let string = ''
	for(let i = word.length - 1; i >= 0; i--) {
		string += word[i]
	}
	return string
}

console.log(reverseStringTraditional("hello world"))
