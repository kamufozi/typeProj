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

// async function getData(path: string): Promise<unknown> {
//   const response = await fetch(path);
//   return await response.json();
// }

// type Person = {
//   id: string;
//   name: string;
// };
// function isPerson(person: any): person is Person {
//   return "id" in person && "name" in person;
// }
// async function getPerson(id: string): Promise<Person | null> {
//   const person = await getData("/people/1");
//   if (person) {
//     return person;
//   }
//   return null;
// }
// let tue:[string,number];
// tue=[29,'jellu']

// enum Level{
//   Low='L',
//   Medium='M',
//   High='H'
// }
// let level:Level=Level.High;
// level='H';
// console.log(level)

type fozi=number|string
type keke=number&string
let index:fozi=22
// let ondo:keke=
function sayHi(message){
  console.log('hi')
}
// type sayHey=(message:string)=>void

// let try: sayHey=(message)=>{
//   console.log(message)
// }

type sayHe = (message: string) => void

let try1: sayHe = (message) => {
  console.log(message)
}

try1("Hello!")

interface mamyake{
  name:string
  age:number
}
interface mamyake{
  height:number
}
let userDetails:mamyake={
  name:'fozi',
  age:22,
  height:911
}
type A={
  chars:string
}
type B =A & {
  mani:number
}
let rudeus:B={
  chars:'a',
  mani:599
}
interface fire{
  power:string
  damage:number
}
type C=fire&B&{afterMath:string}
let killMonger:C={
  power:'fireBall',
  damage:44,
  chars:'xj',
  mani:44,
  afterMath:'-22'
}
interface sakura extends A{
  sheesh:string
}
let gore:sakura={
  sheesh:'hey',
  chars:'nonese'
}
interface mimi extends sakura{
  name:number
}
let kempo:mimi={
  name:12,
  sheesh:'ngo gute',
  chars:'harya ni hehe'
}
type name=number|string

const buyButton: ButtonProps = {
  text: "Buy",
  onClick: () => console.log("Buy"),
};
interface ButtonProps {
  text: string;
  onClick?: () => void;
  optional?: string;
  // hey: string;
}
interface ColoredButtonProps extends ButtonProps{
  color: string
}
const greenBuyButton: ColoredButtonProps = {
  color: "Green",
  text: "Buy",
  onClick: () => console.log("Buy"),
};
const log = (message: string) => {
  console.log(message);
};
interface log{
  (message:string):void
}
let eg:log=(message:string)=>{
  console.log(message)
}
eg('Coucou les cherie')
type Uno= number | null |undefined;
type Fruit='Banana'|'Apple'|'Pear'
let agex:Uno;
agex=null;
agex=undefined
console.log(age);
enum couleus{
  left,
  right
}
let test:couleus=couleus.right
console.log(test)
type Name = {
  firstName: string;
  mobile: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};
type Contact = Name & PhoneNumber;
let fred:Contact={
  firstName:'fred',
  mobile:'09',
  landline:'00',
  
}
type Email = {
  emailAddress: string;
};
type BaseElement = {
  name: string;
  kind: "text" | "number" | "email";
};
type TextInput = {
  kind: "number";
};
type Field = BaseElement & TextInput;
const agfffe: Field = {
  name: "Age",
  kind: "number",
};
type AX = {
  doIt: (a: string) => void;
};
type BX = {
  doIt: (a: string, b: string) => void;
};
type AX_and_BX = AX & BX;
const ab_v1: AX_and_BX = {
  doIt: (a: string) => {},
};
// const ab_v2: AX_and_BX = {
//   doIt: (a: string, b: string) => {},
// };
interface Names{
  [index:number]:string;
}
let names:Names=['hi']
