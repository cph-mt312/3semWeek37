function add(n1, n2) {
    return n1 + n2;
}

var mul = function (n1, n2) {
    return n1 * n2;
};

var sub = function (n1, n2) {
    return n1 - n2;
};

var cb = function (n1, n2, callback) {
    try {
        if (typeof n1 !== 'number' || typeof n1 === 'undefined')
            throw new Error('Not a number');
        else
        if (typeof n2 !== 'number' || typeof n2 === 'undefined')
            throw new Error('Not a number');
        else
        if (typeof callback !== 'function' || typeof callback === 'undefined')
            throw new Error('Not a function');
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
    return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
};

// Prints the number 3
console.log(add(1, 2));

// Prints the function: [Function: add]
console.log(add);

// Prints the number 3. I'm guessing it ignored the 3rd argument?
console.log(add(1, 2, 3));

// Prints 'NaN' which Not-a-Number
console.log(add(1));

// Uses add function as callback and prints return String from var cb, i.e. 3 + 3 = 6
console.log(cb(3, 3, add));

// Same as above but var sub instead of add function, i.e. 4 - 3 = 1
console.log(cb(4, 3, sub));

// TypeError: Callback is not a function
// Missing arguments in add() function
// console.log(cb(3, 3, add()));

// Same as in line 26 + 29, in this case 3 + hh = 3hh
// Converts the number 3 to a String and concatenate the two = 3hh
console.log(cb(3, "hh", add));

// Prints the number 16
console.log(cb(4, 4, mul));

// Prints the number 3
console.log(cb(6, 2, function (n1, n2) {
    return n1 / n2;
}));