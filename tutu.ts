// let var1='mamyake'
// var1=0

type VisitsData = {
  visits: Array<{
    page: {
      symbol: string;
    };
  }>;
  user: {
    name: string;
  };
};
function logisits(data: VisitsData) {
  data.visits.forEach(visit => console.log(visit.page.symbol, data.user.name));
}
logisits({
    visits:[{page:{symbol:"Page1"}},{page:{symbol:"Page2"}}],
    user:{name:"Bob"},
})
const firstName='Non';
const surName='yes';
const fullName=`${firstName} ${surName}`
function pluto(a:number,b?:number):number{
  return a+(b||0);
}
console.log(pluto (0));
function divide(a:number, b:number):number {
  return a / b;
}
// let dateOfBirth = new Date(1990, 4, 7);
const firsnetName = "Bob";
const age = 31;
const created = new Date(2019, 11, 6);
const bool=true;
// const su=Symbol('###')
const bigint=1e19;
const arr=[1,2,4]
const last = "Smith";
let  surname = last;
const first = "Bob";
// const last = "Smith";
const fulnlName = `${first} ${surname}`;
const dateOfBirth = new Date(1990, 4, 7);
console.log(dateOfBirth.getDate)
console.log(dateOfBirth.addDays(2));
function calculateRenewal(startDate:Date):Date {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}
let whatCanIHold: void;
whatCanIHold = null;
whatCanIHold = "something";