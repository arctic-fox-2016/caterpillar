module.exports = {

    isEmpty: function(data) {
        if (data.length == 0) return true
        return false
    },

    count: function(data) {
        return data.length
    },

    head: function(data) {
        return data[0]
    },

    tail: function(data) {
        return data.slice(1, data.length)
    },


    flatten: function(data) {
        let result = []

        function flatten2(data2) {
            for (let i = 0; i < data2.length; i++) {
                if (!Array.isArray(data2[i])) {
                    result.push(data2[i])
                } else {
                    flatten2(data2[i])
                }
            }
        }
        flatten2(data)
        return result
    }





}
