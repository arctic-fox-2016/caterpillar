var self = module.exports = {
  isEmpty: function(value) {
      if(value.length > 0){
        return true
      }else {
        return false
      }
  },
  count: function(value) {
      return value.length
  },
  head: function(value){

      return value[0]

  },
  tail: function(value){
    let isi = []
    for (var i = 1; i < value.length; i++) {
       isi.push(value[i])
    }
     return isi
  },
  flatten: function(value){
    let sum = []
    return value.reduce(function(sum,item) {
      for (var i = 0; i < value.length; i++) {
        if (typeof item =='number'){
          sum.push(value[i])
          return sum;
        }else {
          return sum + self.flatten(item);
        }
      }

    },0)
  }
}
