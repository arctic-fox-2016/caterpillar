module.exports = {

    isEmpty: function(array) {
        if (array.length == 0) return true
        return false
    },

    count: function(array) {
        return array.length
    },

    head: function(array) {
        return array[0]
    },

    tail: function(array) {
        return array.slice(1, array.length)
    },


    flatten: function(array) {
        let result = []

        function flatten(array) {
            for (let i = 0; i < array.length; i++) {
                if (!Array.isArray(array[i])) {
                    result.push(array[i])
                } else {
                    flatten(array[i])
                }
            }
        }
        flatten(array)
        return result
    }





}
