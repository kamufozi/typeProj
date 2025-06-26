var setRange = function (array) {
    var x = array[0];
    var y = array[1];
    return { x: x, y: y.age > 10 };
};
console.log(setRange([true, { name: 'Patrick', age: 3 }]));
