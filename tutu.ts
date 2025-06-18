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
const items:number[]=[]
const array = [1, 2, 3];
console.log(array);
function logScores(firstName:string, ...scores:number[]) {
  console.log(firstName, scores);
}

logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
// logScores("Mike", 90, 65, "65");

const tomScore: [name:string, ...score:number[]] = ["Tom", 70];
const tomScores: (string|number)[] = ["Tom", 70,89];
const benScores:[name:string,...score:number[]]=['Ben',70,50,80]
type Status = "Pending" | "Working" | "Complete"|"canceled";

function doSomeAction(status: Status) {
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
      neverReached(status)
      break;
  }
}
function neverReached(never:never){
}
doSomeAction("Pending");
function add(a: unknown, b: unknown) {
   if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0
}
console.log(add("4", 5));

async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};
function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}
async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
  if (person) {
    return person;
  }
  return null;
}
let tue:[string,number];
tue=[29,'jellu'
]

let 
