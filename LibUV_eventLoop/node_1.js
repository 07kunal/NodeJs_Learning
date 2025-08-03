// Provide the out of the given questions.

const fs = require('fs');

// setImmediate(() => console.log('setImmediate'));
setTimeout(() => console.log('Timer expired'), 0);

Promise.resolve('Promise').then(() => console.log('Promise'));
Promise.resolve('Promise').then(() => Promise.resolve('Promise').then(() => console.log('Promise2')));


fs.readFile("./text.txt", "utf8", (error, data) => {
    console.log('File Reading CB:', data);
});

process.nextTick(() => {
    process.nextTick(() => console.log('inner nextTick'));
    console.log('outer nextTick');
});
function a() {
    console.log('func call');
}
a();
console.log('Last line of the file');

/// DRY run
/*
func call

Last line of the file
outer nextTick
Promise
promise2
Timer expired
inner nextTick
File Reading CB data
*/
