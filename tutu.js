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
console.log(pluto(0));
function divide(a, b) {
    return a / b;
}
// let dateOfBirth = new Date(1990, 4, 7);
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
var dateOfBirth = new Date(1990, 4, 7);
console.log(dateOfBirth.getDate);
// console.log(dateOfBirth.addDays(2));
// function calculateRenewal(startDate:Date):Date {
//   const result = new Date(startDate);
//   result.setDate(result.getDate() + 30);
//   return result;
// }
// let whatCanIHold: void;
// whatCanIHold = null;
// whatCanIHold = "something";
// const numbers: Array<number> = [1,'two',true];
var items = [];
var array = [1, 2, 3];
console.log(array);
function logScores(firstName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(firstName, scores);
}
logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
// logScores("Mike", 90, 65, "65");
var tomScore = ["Tom", 70];
var tomScores = ["Tom", 70, 89];
var benScores = ['Ben', 70, 50, 80];
function doSomeAction(status) {
    switch (status) {
        case "Pending":
            // some code
            break;
        case "Working":
            // some code
            break;
        case "Complete":
            // some code
            break;
        case "canceled":
            //some code
            break;
        default:
            neverReached(status);
            break;
    }
}
function neverReached(never) {
}
doSomeAction("Pending");
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 0;
}
console.log(add(4, 5));

