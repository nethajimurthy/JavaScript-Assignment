function getEven(arr) {
    let even=arr.filter(function(num){
        if(num%2==0){
            return num;
        }
    })
    return even;

}

function multiplyByN(arr, n) {
    let multiply=arr.map(function(val){
        return val*n;
    })
    return multiply;
}

function removeNthElement(arr, n) {
    arr.splice(n,1);
    return arr;
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}