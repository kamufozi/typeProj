// let var1='mamyake'
// var1=0
function logisits(data) {
    data.visits.forEach(function (visit) { return console.log(visit.page.symbol, data.user.name); });
}
logisits({
    visits: [{ page: { symbol: "Page1" } }, { page: { symbol: "Page2" } }],
    user: { name: "Bob" },
});
var firstName = 'Non';
var surName = 'yes';
var fullName = "".concat(firstName, " ").concat(surName);
function pluto(a, b) {
    return a + (b || 0);
}
console.log(pluto(0,'hey'));
function divide(a, b) {
    return a / b;
}
// var dateOfBirth = new Date(1990, 4, 7);
var firsnetName = "Bob";
var age = 31;
var created = new Date(2019, 11, 6);
var bool = true;
// const su=Symbol('###')
var bigint = 1e19;
var arr = [1, 2, 4];
var last = "Smith";
var surname = last;
var first = "Bob";
// const last = "Smith";
var fulnlName = "".concat(first, " ").concat(surname);
let what=Date.now;
console.log(what);
const dateOfBirth = new Date(1990, 4, 7);
console.log(dateoOfBirth.g)