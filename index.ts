const menu=[
    {name: 'margharita',price:9},
    {name: 'chickenBBq',price:11},
    {name: '4seasons',price:8}
]
let nextOrderId=0;
let cashInRegister =100
let orderQueue=[]
function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}
function placeOrder(pizzaName){
    let inObj=menu.filter(o=>o.name===pizzaName);
    cashInRegister+=inObj[0].price;
    let toAdd={id:++nextOrderId,pizza:pizzaName,status:'ordered'};
    orderQueue.push(toAdd);
    return toAdd;
}
function completeOrder(orderId){
    let inObj=orderQueue.filter(o=>o.id===orderId)
    // console.log(inObj)
    inObj[0].status='completed';
    console.log(inObj)
    return inObj
}
placeOrder('margharita')
placeOrder('chickenBBq')
console.log(orderQueue)
completeOrder(1)
completeOrder(2)

