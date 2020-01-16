// implement reduce

function reduce2 (iterable, reduceFn, accumulator){
  for(let i of iterable){
    accumulator = reduceFn(accumulator, i)
  }
  return accumulator;
}

console.log(reduce2([1, 2, 3], (sum, i) => {
  return sum + i;
}, 0));

// find max
const max = function(it){
  return reduce2(it,(acc, elem)=> Math.max(acc,elem),it[0] )
}
console.log(max([0,2,3,-1,9])) // Prints 9

const min = function(it){
  return reduce2(it,(acc, next)=> Math.min(acc,elem),it[0])
}
console.log(max([0,2,3,-1,9])) // Prints -1