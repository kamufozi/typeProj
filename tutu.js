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
