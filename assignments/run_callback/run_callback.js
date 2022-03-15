function RunCallback(a, b, cb) {
    return cb(a,b)
}
let cb=(a,b)=>a+b;

module.exports = RunCallback;
