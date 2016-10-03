var self = module.exports = {
  isEmpty: function(value) {
    if(Array.isArray(value))
      if(value.length > 0) return false
    return true
  },
  count: function(value) {
    if(Array.isArray(value))
      return value.length
    return false
  },
  head: function(value){
    if(Array.isArray(value))
      return value[0]
    return false
  },
  tail: function(value){
    if(Array.isArray(value)){
      value.shift()
      return value
    }
    return false
  },
  flatten: function(value){
    if(Array.isArray(value)){
      var result = []
      function checkArray(arr){
        for(var idx = 0; idx < arr.length; idx++){
          if(self.isEmpty(arr[idx])){
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
}
