console.log("hi welcome");
a=8;
var a=8;
let g=23;
{
    var a=23;
    let g=34;
    console.log(g)
}
console.log(g)
console.log(typeof(a))
b="hai";
console.log(typeof(b))
c="true";
console.log(typeof(c))
d=true;
console.log(typeof(d))
// javascript objects
let person={
    name:'aha',
    age:23,
    location:'tvm'
}
console.log(person.name);
let arr=['aha',23,10];
console.log(arr[2])
let arr_obj=[{age:23,location:'tvm'}]
console.log(arr_obj[1]);

function add(a,b){
    var sum=a+b;
    return sum;
}
let s=1;
let k=s++;
console.log(s);
var a1=99;
var a2='99';
if (a1>a2) {
    console.log('a1 is greater');
    
} else if(a1==a2)
{console.log('a1 is same as a2 and the value is'+a1);
    
}
else{
    console.log('a2 is greater');
}
var array=[10,20,30]
for (let i = 0; i < array.length; i++) {
   console.log(array[i])
}
var array2=[20,30]
for (const i of array2){
    console.log(array2[i]);
}