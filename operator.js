const test ={
    prop:50,
    function(){
        return this.prop;
    },
};
console.log(test.function());

//function context
function getThis(){
    return this;
}
const obj1={name :"Hi I am Rudra"};
const obj2 ={name :"let's connect with me"};
obj1.getThis = getThis;
obj2.getThis = getThis;
console.log(obj1.getThis());
console.log(obj2.getThis());
let a=null;
let b=345;
let c=true;
let d=BigInt("567")+BigInt("3");
let g=undefined;
console.log(a,b,c,d,g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof g);
// Non-premitive data types
let M={name:"Rudranil",age:30}
console.log(console.log(M.name));
// function beheavior
function sayHello(){
    console.log("hi there");
}
let result = sayHello();
console.log(result);

function foo(){
    console.log(this);
}
foo();
function bar() {
    console.log(this);
}
bar();