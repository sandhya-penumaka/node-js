#for seeing output
// console.log('Hello program')
// console.log('Hello program')
#for seeing global variable
// console.log(global);
#for seeing os-output
// const os=require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
#for seeing math operations-output
// const math=require('./math');
// console.log(math.addition(4,5));
// console.log(math.subtraction(4,5));
// console.log(math.multiplication(4,5));
// console.log(math.division(4,5));
// console.log(math.remainder(4,5));
// const{addition,multiplication}=require('./math');
// console.log(addition(22,77));
// console.log(multiplication(22,77));
#http module
const http=require('http');
//http.createserver().listen(8080)
http.creareserver(req,res)=>{
    res.write('hi,we are practicing node');
    res.end();
    console.log('server is running---');
}).listen(8080)
