function RunCallback(a, b, cb) {
    return cb(a+b)
}
let cb=(num)=>num;

module.exports = RunCallback;
