const crypto = require('crypto');

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Test1");
});


crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Test2");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Test3");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Test4");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("Test5");
});