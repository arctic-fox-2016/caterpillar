let isEmpty = function(input){
  if(input.length > 0){
    return false
  } else {
    return true
  }
}


let head = function(input){
  return (input[0])
}



let tail = function(input){
  input.shift()
  return input
}

let flatten = function(input){
  let result = []
  flattenjunior(result, input)
  return result
}


let flattenjunior = function(result, list){
  for (let i in list){
    if(typeof(list[i])!= "object" || list[i].length==1){
      result.push(list[i])
    } else {
      flattenjunior(result, list[i])
    }
  }
}


console.log(isEmpty([1,2]))
console.log(head([4,5]))
console.log(tail([4,5,6]))
console.log(flatten([4,5,[8,9,10,[11,12]]]))
