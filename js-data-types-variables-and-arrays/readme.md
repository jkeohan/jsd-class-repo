# Data Types, Variables, and Arrays

### Objectives
*After this lesson, students will be able to:*

- Describe the concept of a "data type" and how it relates to variables
- Describe use cases of different "data types"
- Declare, assign to, and manipulate data stored in a variable
- Explore and use a programming or markup language's standard library and built-in functions (iterators, datatype/array methods)
- Iterate over and and manipulate values in an array
- Describe how arrays are used to store data

### Preparation
*Before this lesson, students should already be able to:*

- Describe briefly what javascript
- Be comfortable with a text editor


## What is a data type? Intro (5 mins)

From the [Wikipedia](https://en.wikipedia.org/wiki/Data_type):


_In computer science and computer programming, a data type or simply "type" is a classification identifying one of various types of data that determines the possible values for that type, the operations that can be done on values of that type, the meaning of the data, and the way values of that type can be stored._

Data types are really similar across different languages:

| Data Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences, surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| Integers | Whole numbers, with no delimiter | `42`, `1024` |
| Floats | Decimals, with no delimiter | `3.14`, `3.0` |
| Booleans | Represents either true or false | `true`, `false` |

We'll elaborate on all of these - except Booleans, for now. We'll talk about how they differ in JavaScript, show you some helper methods to work with each type, and then practice these helper methods to manipulate data using Javascript.

#### Working with data in JavaScript

From the [mozilla developer network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction): "JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements...
Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation."

#### What are we working with? Codealong (20mins)

For this lesson, we're going to use the Chrome console shell.  Open a chrome window, and type `cmd+alt+j` to open the console.

#### typeof()

To get an idea of the type of data we're working with, we can use [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).  Let's try it out in the console with the following:

```javascript
typeof(37) === 'number';
=> true

typeof({}) === 'object';
=> true

typeof('hi there') === 'string';
=> true

```

`typeof()` returns a string with the type of the operand, or expression of the object you're looking at.


#### Numbers

In more low-level languages, numbers are divided into two classes or objects:

* Integers

  ```javascript
   ..., -1,0, 2, 3, 4, 5, ...
  ```

* Floats (or Decimal numbers)

  ```javascript
   2.718, 3.14, .5, .25, etc
  ```

All numbers in JavaScript are **"double-precision 64-bit format IEEE 754 values"** - read this as "There's really no such thing as an integer in JavaScript."  You have to be a little careful with your arithmetic if you're used to math in other programming languages. Let's take a look at what happens when we do this:

```javascript
0.1 + 0.2
=> 0.30000000000000004
```

In JavaScript, these data points are the same **type** of object, which it calls *Numbers*, so if you know floats and integers do not go looking for them.


#### Arithmetic Operators

Operators are used to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) - that you've been learning since grade school - are supported, including addition, subtraction, modulus (or remainder) arithmetic and so forth.  Check it out:

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```

#### Special Number Operators

JavaScript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

 - Taking a number to some `power`? Then just use `Math.pow`

```javascript
// 3^2 becomes
Math.pow(2,2)
=> 4
// 2^4 becomes
Math.pow(2,4)
=> 16
```
  -  Taking a square root

```javascript
// √4 becomes
Math.sqrt(4)
=> 2
```
* Need a `random` number? Then use `Math.random`.

```javascript
// The following only returns a random decimal
Math.random()
=> .229375290430
/**
  The following will return a
  random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`, `Math.ceil`, or `Math.round`.

```javascript
// round down to the nearest integer
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3

// round up to the nearest integer
Math.ceil(3.14)
=> 4
Math.ceil(3.9999)
=> 4

// Mathematically round to the nearest integer
Math.round(3.14)
=> 3
Math.round(3.9999)
=> 4
```


#### Strings

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

```js
'John'
'Jane'
'123'
```

#### String helper methods

To find the length of a string, access its [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```js
'hello'.length;
=> 5
```

There's our first brush with JavaScript objects! Did I mention that you can use strings like objects, too?

Strings have other [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) as well that allow you to manipulate the string and access information about the string:

```js
'hello'.charAt(0);
=> "h"

'hello, world'.replace('hello', 'goodbye');
=> "goodbye, world"

'hello'.toUpperCase();
=> "HELLO"
```

Types of values like `Number` or `String` are not very useful without being able to form **Expressions** or **Combinations**.

Try your favorite number operators as expressions:

```javascript
  1 + 1
  => 2
  2 - 1
  => 1
```

You can also create expressions with strings using the addition operator:

```javascript
  'Hello, ' + 'world!'
  => "Hello, world!"
```

This is called **String Concatentation.**

> Note: the 'plus' binary operator is said to be "**overloaded**"— meaning that it behaves differently depending on what's on either side of it.
> Consider the following expressions. What do they output, and why?
> `1 + 2 + '3'` vs `'1' + 2 + 3`



#### Converting Strings to Integers with parseInt() and parseFloat()

You can convert a string to an integer using the built-in [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function. This takes the base for the conversion as an optional second argument, which you should always provide:

```javascript
parseInt('123', 10);
=> 123

parseInt('010', 10);
=> 10
```

This will be important later when we're taking user input from the web and using it on our server or in our browser to do some type of numeric calculation.


Similarly, you can parse floating point numbers using the built-in [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function which uses base 10 always unlike its `parseInt()` cousin.

```javascript
parseFloat('11.2');
=> 11.2
```

You can also use the unary `+` operator to convert values to numbers:

```javascript
+"42";
=> 42
```

#### NaN

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However the "+" operator simply converts the string to `NaN` if there is any invalid character in it.


A special value called [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (short for "Not a Number") is returned if the string is non-numeric:

```javascript
parseInt('hello', 10);
=> NaN
```

**`NaN` is toxic**: if you provide it as an input to any mathematical operation the result will also be `NaN`:

```javascript
NaN + 5;
=> NaN
```

You can test for `NaN` using the built-in [`isNaN()`](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function:

```js
isNaN(NaN);
=> true
```
JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` and all work as you expect and should have practiced during your pre-work.

#### Booleans

A JavaScript Boolean represents one of two values: true or false.


<img src = "Truth_table_for_AND,_OR,_and_NOT.png">


#### Truthy & Falsey

#### All of the following become false when converted to a Boolean

- `false`
- `0`
- `''` (empty string)
- `NaN`
- `null`
- `undefined`

#### All other values become true when converted to a Boolean

Do not confuse the primitive boolean values `true` and `false` with the true and false values of the Boolean object. For example:

```javascript
const b = new Boolean(false);
if (b) {
  console.log('true')
}
//=> true
```

There is a simple way of verifying the truthiness or falsiness of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a boolean. So if you add two `!` then you'll get the boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

#### Boolean/Logical Operators

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

Logical operators will always return a boolean value `true` or `false`.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite boolean value, i.e.

```javascript
!true
//=> false
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = o && o.getName();
```

In this case, if the first operand `o` is false, then the second operand `o.getName()` will not be evaluated. The expression is basically saying "we already know the whole `&&` expression is false, because `o` is falsey. Why bother dealing with the second operand?"

Or for setting default values:

```javascript
var name = otherName || o.getName();
```

In this case, if the first operand `otherName` is false, then we'll see that `"my name"` will be returned. If `otherName` is truthy (e.g. it contains a value), it will get returned, and the second expression won't even be evaluated. The expression is basically saying "we already know the whole `||` expression is true, because `o` is truthy. Why bother dealing with the second operand?"

#### Null and Undefined

JavaScript distinguishes between:

- `null` a value that indicates a deliberate non-value
- `undefined` that indicates an uninitialized value — that is, a value hasn't even been assigned yet

## Variables and Keywords - Codealong (10 mins)

Variables are used to store data types into the memory of the computer so that they can be referenced later.

#### Always use var!

New variables in JavaScript are declared using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var "/en/JavaScript/Reference/Statements/var") keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var a;
=> undefined
```

So lets try assigning a value to variable:

```javascript
var name = 'Alex';
=> undefined

name
=> "Alex"
```

Having made some expressions it becomes evident we want to store these values.

```js
var myNumber = 1;
// or also

const myString = 'Greetings y'all!'
```

The main note to make here is that these variables should always have the `var`, `const`, or `let` keyword and use `camelCase`.

#### Assignment Operators

Values are assigned using `=`, and there are also compound assignment statements such as `+=` and `-=`:

```javascript
var x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement, respectively. These can be used as prefix or postfix operators.

In Javascript we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  be careful though,
  since numbers can be floats
  javascript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```


## Arrays - Demo (5 mins)

Unfortunately, strings and numbers are not enough for most programming purposes.
What is needed are collections of data that we can use efficiently, Arrays.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them
* Quickly reordering data

Arrays, ultimately, are a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.


```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```javascript
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

We can even use strings like arrays:

```javascript
var friend = "bobby bottleservice";
// pick out first character
friend[0]
//=> 'b'
friend.length
```


## Working with Arrays - Codealong (15 mins)

Using the JavaScript Keyword `new`, is one way of creating arrays:

```javascript
var a = new Array();
=> undefined

a[0] = 'dog';
=> "dog"

a[1] = 'cat';
=> "cat"

a[2] = 'hen';
=> "hen"

a
=> ['dog', 'cat', 'hen']

a.length;
=> 3
```

A more convenient notation is to use an array literal:

```javascript
var a = ['dog', 'cat', 'hen'];

a.length;
=> 3
```

#### Length method

The `length` method works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

**Remember**: the length of the array is one more than the highest index.

#### Getting data from an array

If you query a non-existent array index, you get `undefined`:

```javascript
var a = ['dog', 'cat', 'hen'];
=> undefined

typeof a[90];
=> undefined
```

<br>

#### Array helper methods

Arrays come with a number of methods. Here's a list of some popular helpers:

> Note: You might want to demonstrate a few of these.

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - `Push` adds one or more items to the end.

- `a.reverse()` - Reverse the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

Remember, though, you'll never remember _every_ method.  Explore the the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.

## Iterating through an array - Codealong (10 mins)

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

JavaScript arrays have several advanced _iterator methods_.

Several of these methods require a function be supplied as an argument, and the code you write in the function will be applied to _each_ item in the array, individually.

As an example, lets look at the `forEach` method that we can use instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

This function would return:

```javascript
Bruins
Cal Bears
Ravens
Ducks
undefined
```

Notice how much clearer this syntax is than that of the `for` loop?

Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`


## Independent Practice (15 minutes)

> ***Note:*** _This can be a pair programming activity or done independently._

Take a look at the [independent-practice.js](independent-practice.js) and work through each exercise using the comments provided to create the correct variables. We've provided you with **test coverage** for this exercise. Read on to see how to use it.

### Getting Started
  1. From the command-line (in this folder) run `npm install` to download all the necessary files.
  2. run `npm test` to launch a browser window with the test-runner.
  3. Reload the new browser window each time you make a change.
  4. You're done when all your tests pass!

## Conclusion (5 mins)

> Note: Review the answers to the final activity with the code provided in the [solution-code]
(solution-code)

- Describe use cases of different "data types".
- Why is iterating important when working with stored data?

Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.
