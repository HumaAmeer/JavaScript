// Lecture: Loops
/*
for (var i = 0; i < 10; i++) {
	console.log(i);
}


0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, False, end loop!
*/

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
// for loops
for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
	console.log(names[i]);
}
*/

// while loops
/*
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}


for (var i = 0; i <=5; i++) {
	if (i === 3) {
		continue;
	}

	console.log(i);
}
*/

// Coding Challenge: 2

/*
var years = [2001, 1985, 1994, 2014, 1973];


function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
	     ages[i] = 2016 - years[i];
    } 

    for (i = 0; i < ages.length; i++) {
	    if (ages[i] >= 18) {
		  console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
          fullAges.push(true);
        } else {
    	  console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
    	  fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/

// Lecture: Hoisting

/*
calculateAge(1965);

function calculateAge(year) {
	console.log(2016 - year);
}


//retirement(1956);
var retirement = function(year) {
	console.log(65 - (2016 - year));
}
*/


// Variables

/*
console.log(age);
var age = 23;

function foo() {
	console.log(age);
	var age = 65;
	console.log(age);
}
foo();
console.log(age);
*/


// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		third()
	}
}

function third() {
	var d = 'John';
	//console.log(c);
	console.log(a+d);
}
*/



// Lecture: The this keyword

//console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}
*/

var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
		console.log(2016 - this.yearOfBirth);

        /*
		function innerFunction() {
			console.log(this);
		}
		innerFunction();
		*/
	}
}

john.calculateAge();

var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();

























