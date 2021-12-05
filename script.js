//task a , Print odd numbers in an array
//Anonymus function
let a=[3,6,9,8,7,4,5,2,10,25,14,17,18,49,84];
let odd = function(num){
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
let str=function(up){
      let string = up.toLowerCase().split(" ");
      for(var i in string){
        string [i]= string[i].charAt(0).toUpperCase()+string[i].slice(1);
      }
      console.log(string.join(" ")) ;
};

str("Convert all the strings to title caps in a string array");

// task c , Sum of all numbers in an array
//IIFE
let sum = (function(add){
    var sum=0;
    for(var k of add){
         sum +=k;
    }
    console.log(sum);
}([1,2,3,4,5,6,7,8,9]));

// task d , Return all the prime numbers in an array
let d = function(int){
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

let polim =(function(arr){
    let polim=[];
    for(let e of arr){
        let spl= e.split("").reverse().join("");
        if(e===spl){
            polim.push(e);
        }
    }
    console.log(polim);
}(["mom","sms","guvi","geek"]));


// task f ,Return median of two sorted arrays of same size

let median = function(num){
    let arr=[];
  if(num[0].length===num[1].length){
    for(var i of num){
        let sortnum = i.sort((a,b)=> {return a-b});
        let middle = Math.floor(sortnum.length/2);
        if(sortnum.length%2===0){
            arr.push((sortnum[middle-1]+sortnum[middle])/2);
        }
        else{
            arr.push(sortnum[middle]);
        }
    }
   console.log((arr[0]+arr[1])/2);
  }
  else{
      console.log("Length of two Arrays are not equal")
  }
    
};
median([[2,3,5,21,456],[9,7,6,5,7]]);


// task g , Remove duplicates from an array

let duplicate = (function(g){
   let dup = [... new Set(g)];
    console.log(dup);
});
duplicate([2,5,6,78,5,2,9,54,78]);


// task f, Rotate an array by k times

let rotate= function(f,times){
    for(var i=1;i<=times;i++){
       f.splice(0,0,f[(f.length)-1]);
        f.pop();
    }
    console.log(f);
};
rotate([1,2,3,4,5],4);