// Solve all the typing issues in the code without changing the implementation

const setRange = (range: [boolean,{na}]): {x:boolean,y:boolean} => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

setRange([true, { name: 'Patrick', age: 3}]);x