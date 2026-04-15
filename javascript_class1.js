// for(let i =1; i<=100;i++){
//     if(i%3==0 && i%5 == 0){
//         console.log("Fizz");
//     } else if(i%5 == 0 && i%3!=0){
//         console.log("Buzz");
//     }
//     else if(i%3==0 && i%5 == 0){
//         console.log("FizzBuzz")
//     }
//     else{
//         console.log(i);
//     }
// }



// let n = Number(prompt("Enter the number: "));
// for(let i = 1;i<=10;i++){
//     console.log(n+ "X" + i + "=" + n*i);
// }



let scripting = Number(prompt("Enter marks of scripting language: "));
let computerNetworks = Number(prompt("Enter marks of CN: "));
let OS = Number(prompt("Enter marks of OS: "));
let python = Number(prompt("Enter marks of python: "));
let DS = Number(prompt("Enter marks of DS: "));
if(avg>=0 && avg<=50){
    console.log("Grade is F");
}
else if(avg>=51 && avg<=60){
     console.log("Grade is D");
} else if(avg>=61 && avg<=70){
     console.log("Grade is C");
} else if(avg>=71 && avg<=80){
     console.log("Grade is B");
} else if(avg>=81 && avg<=90){
     console.log("Grade is A");
} else{
     console.log("Grade is A+");
}

