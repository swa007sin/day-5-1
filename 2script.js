//Arrow Function
//task a , Print odd numbers in an array
let a=[3,6,9,8,7,4,5,2,10,25,14,17,18,49,84];
let odd =(num)=>{
    let odds=[];
    for(var i of num){
      if(i%2!=0){
        odds.push(i);
      }
    }
    console.log(odds);
};
odd(a);

//task b , Convert all the strings to title caps in a string array
let str=(up)=>{
    let string = up.toLowerCase().split(" ");
    for(var i in string){
      string [i]= string[i].charAt(0).toUpperCase()+string[i].slice(1);
    }
    console.log(string.join(" ")) ;
};

str("Convert all the strings to title caps in a string array");

// task c , Sum of all numbers in an array

let sum = (add)=>{
    var sum=0;
    for(var k of add){
         sum +=k;
    }
    console.log(sum);
};
sum([1,2,3,4,5,6,7,8,9]);

// task d , Return all the prime numbers in an array
let d = (int)=>{
    let prime=[];
for(var i of int){
    let count=0;
    for(var j=2;j<=i;j++){
        if(i===1){

        }
        else if(i%j===0){
            count+=1;
        }
    }
    if(count===1){
        prime.push(i);
    }
}
console.log(prime);
};
d([1,2,3,4,5,6,7,8,9,99,101]);

// task e , Return all the palindromes in an array

let polim =(arr)=>{
    let polim=[];
    for(let e of arr){
        let spl= e.split("").reverse().join("");
        if(e===spl){
            polim.push(e);
        }
    }
    console.log(polim);
};
polim(["mom","sms","guvi","geek"]);