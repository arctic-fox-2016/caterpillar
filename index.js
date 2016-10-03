function isEmpty(value){
  if(Array.isArray(value))
    if(value.length > 0) return false
  return true
}

function count(value){
  if(Array.isArray(value))
    return value.length
  return false
}

function head(value){
  if(Array.isArray(value))
    return value[0]
  return false
}

function tail(value){
  if(Array.isArray(value)){
    value.shift()
    return value
  }
  return false
}

function flatten(value){
  if(Array.isArray(value)){
    var result = []
    //value.shift()
    function checkArray(arr){
      for(var idx = 0; idx < arr.length; idx++){
        if(isEmpty(arr[idx])){
          //checkArray(arr[idx])
          result.push(arr[idx])
        } else {
          checkArray(arr[idx])
        }
      }
    }
    checkArray(value)
    return result
  }
  return false
}

// Implementing isEmpty
console.log("\n\nisEmpty");
var value = []
console.log(`console.log(isEmpty(${JSON.stringify(value)})) // ${isEmpty(value)}`)
var value = [1,2,3]
console.log(`console.log(isEmpty(${JSON.stringify(value)})) // ${isEmpty(value)}`)

// Implementing count
console.log("\n\ncount");
var value = []
console.log(`console.log(count(${JSON.stringify(value)})) // ${count(value)}`)
var value = [1,2,3]
console.log(`console.log(count(${JSON.stringify(value)})) // ${count(value)}`)

// Implementing head
console.log("\n\nhead");
var value = [1,2,3]
console.log(`console.log(head(${JSON.stringify(value)})) // ${head(value)}`)
var value = [4,5,7]
console.log(`console.log(head(${JSON.stringify(value)})) // ${head(value)}`)

// Implementing tail
console.log("\n\ntail");
var value = [1,2,3]
console.log(`console.log(tail(${JSON.stringify(value)})) // ${tail(value)}`)
var value = [2,3]
console.log(`console.log(tail(${JSON.stringify(value)})) // ${tail(value)}`)

// Implementing flatten
console.log("\n\nflatten");
var value = [1,[2,3],4,[5,[6,7]]]
console.log(`console.log(flatten(${JSON.stringify(value)})) // ${flatten(value)}`)
