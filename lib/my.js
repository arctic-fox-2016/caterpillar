var self = module.exports = {
    isEmpty: function(value) {
        if (value.length > 0) {
            return true
        } else {
            return false
        }
    },
    count: function(value) {
        return value.length
    },
    head: function(value) {

        return value[0]

    },
    tail: function(value) {
        let isi = []
        for (var i = 1; i < value.length; i++) {
            isi.push(value[i])
        }
        return isi
    },
    flatten: function(a, shallow, r) {
        if (!r) {
            r = []
        }
        if (shallow) {
            return r.concat.apply(r, a);
        }
        for (var i = 0; i < a.length; i++) {
            if (a[i].constructor == Array) {
                self.flatten(a[i], shallow, r);
            } else {
                r.push(a[i]);
            }
        }
        return r;
    }
}
