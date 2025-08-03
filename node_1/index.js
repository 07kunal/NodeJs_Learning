let sumNUM = require('./index2');
let fileFetch = require('node:fs');
console.log('TEST-1');

// main thread blocking code. 
function mainBLocking (){
    for(let i = 0; i <= 100; i++){
        let a = 'gautam';
    }
    return 'kunal';
}
let result = sumNUM(2,3);

// Async operation 
setTimeout(()=>{console.log('Hello mister setTimeout')},5000);
fileFetch.readFile('./textkunal.txt',"utf8",(err,data)=> {
    console.log('File Data: ',data) 
});

let mainResult = mainBLocking();
console.log('mainResult',mainResult);
console.log('result',result);