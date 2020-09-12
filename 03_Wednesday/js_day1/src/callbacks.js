var allNames = ["Lars", "Jan", "Bo", "Peter", "Frederik", "Jytte", "Ib"];
var shortNamesOnly = allNames.filter(names => names.length <= 3);

console.log("Original array:");
allNames.forEach(names => console.log(names));

console.log('\n' + "New array:");
shortNamesOnly.forEach(names => console.log(names));

var allNamesUpperCase = allNames.map(names => names.toUpperCase());
console.log('\n' + allNamesUpperCase + '\n');

function nameArrayToHTML(arrayList) {
    var ulList = "<ul>";
    var listTags = arrayList.map(name => "<li>" + name + "</li>");
    ulList += listTags.join("");
    ulList += "</ul>";
    return ulList;
}
console.log(nameArrayToHTML(allNames));



var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

console.log(cars.filter(cars => cars.year > 1999));
console.log(cars.filter(cars => cars.make === 'Volvo'));
console.log(cars.filter(cars => cars.price < 5000));

function carListToSQL(arrayList) {
    var insertSQL = "INSERT INTO cars (";
    var carAttributes = arrayList.map(car => `(${car.id}, ${car.year}, ${car.make}, ${car.model}, ${car.price})`);
    insertSQL += "id, year, make, model, price) VALUES" + carAttributes;
    return insertSQL;
}
console.log(carListToSQL(cars));

// Asynchronus callbacks

// I would expect the following print-order:
// 1: console.log("aaaaaaaaaa");
// 2: console.log("dddddddddd");
// 3: console.log("ffffffffff");
// 4: msgPrinter("eeeeeeeeee", 1000);
// 5: msgPrinter("bbbbbbbbbb", 2000);
// Reasoning: 4 and 5 has a set delay time and since 2000 > 1000 that should come last.
// The rest of them I assume will be printed out in the order they are written?

var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");
