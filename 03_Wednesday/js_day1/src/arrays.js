// a)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// b)
var all = boys.concat(girls);

// c)
var commaList = all.join(', ');
var hyphenList = all.join(' - ');

// d) + e)
all.push('Lone', 'Gitte');
all.unshift('Hans', 'Kurt');

// f) + g)
all.shift('Hans');
all.pop('Gitte');

// h)
all.splice(3, 2);

// i)
all.reverse();

// j)
all.sort();

// k) Maybe later...

// l)
var allNamesCapitalized = all.map(function (names) {
    return names.toUpperCase();
});

// m)
var filterNamesWithL = all.filter(function (names) {
    return names.charAt(0) === 'l' || names.charAt(0) === 'L';
});