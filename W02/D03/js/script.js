/*

alert("Hello! I am an alert box!!");


//create variable that
 var firstName = "Jeffrey";
 var middleName = "Guy";
 var lastName = "Tunches";

var fisrtMiddleLast = new String('Jeffrey Guy Tunches');

// console log one (string literal() and one (string object)

console.log(firstName);
console.log(fisrtMiddleLast);


// concatanating them

console.log(firstName + fisrtMiddleLast);


// var that holds a number

var carYear = 2016;  //number or integer


// var that holds a float

var personAge = 34.73;


//floating point number oddities

var a = 0.1;
var b = 0.2;
var c = a*b;
console.log(c);


// var that holds a boolian
var myBool = false;



// var that holds a array
var fistPlayer = [firstName + middleName + lastName, [1,2,3], 27, 40.22, true, "codeWarrior"];



//create a var that holds a person name age hair color

var person = {
  name: 'Jeffrey',
  age: 27,
  color: ["eyesBrown", "hairBlack", "age27"]
};


alert(fistPlayer[1][2]);



// captueres users name to a prompt and save as var


var person = {
  name: 'Jeffrey',
  age: 27,
  haircolor: ["brown"]
};


var userName = prompt('what is your name ');
person.name = userName;

var userAge = prompt('what is your age ');
person.age = parseInt(userAge);

var userHairColor = prompt('what is your hair color ');
person.haircolor = userHairColor;

console.log(person);

// confirm a question yes or no and alert result


var ans = confirm('are you age 18 or older');
alert(ans);

*/


/*
// math

1+2
3

1+true
2

true + false
1

false+false
0

5 + "jeffrey"
"5jeffrey"

5+"2015"
"52015"

"2015" + 5
"20155"

"2015" + '5'
"20155"

2010

'2015' + "jeffrey"
"2015jeffrey"

"jeffrey" - "5"
NaN

5-3
2

3-5
-2

"jeffrey" * 5
NaN

5*3
15

infinity*infinity
VM397:1 Uncaught ReferenceError: infinity is not defined(…)(anonymous function) @ VM397:1

infinity * 2
VM416:1 Uncaught ReferenceError: infinity is not defined(…)(anonymous function) @ VM416:1

Infinity * 2
Infinity

Infinity - Infinity
NaN

1/2
0.5

2.0 / 0.0
Infinity

2.0 / -0.0
-Infinity

12%5
2

1%2
1

30%6
0
*/




// new project

/*
var theDate = new Date();
var theYear = theDate.getFullYear();
*/

/*
var theDate = new Date();
var theYear = theDate.getFullYear();
console.log(theDate.getFullYear());
*/

/*
var theDate = new Date();
var theYear = theDate.getFullYear();
var theCalDate = theDtae.getDate();
console.log(theYear);
console.log(theCalDate)
*/

/*
var theDate = new Date();

var theYear = theDate.getFullYear();
var theCalDate = theDate.getDate();
var theWeekDay = theDate.getDay();

console.log(theYear);
console.log(theCalDate);
console.log(theWeekDay);

*/


// note day of the week(0-6) and months (0-11) are zero based

var locale ='en-us';  // note deine here the user prefs
var theDate = new Date();

var theYear = theDate.getFullYear();
var theCalDate = theDate.getDate();
var theWeekDay = theDate.getDay();
var theMon = theDate.getMonth();

console.log(theDate.toLocaleString(locale, {weekday:'long'}));
/* console.log(theDate.toLocaleString('us-en', {weekday:'long'}); */

console.log(theDate.toLocaleString(locale, {month:'long'}));
/* console.log(theDate.toLocaleString('us-en', {month: 'long'}); */

var longMonth = theDate.toLocaleString(locale, {month:'long'})

console.log(theYear);
console.log(theCalDate);
console.log(theWeekDay);
console.log(theMon);
console.log(longMonth);
console.log(longWeekDay + ' ' + longMonth + ' ' + theCalDate + ',' + theYear);

