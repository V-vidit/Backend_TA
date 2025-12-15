const { read } = require("fs");
const readLine=require("readline");

const rl=readLine.createInterface({
    input:process.stdin,
    output: process.stdout
});

rl.question("Enter number between 0 to 999: ", (n)=>{

    n=Number(n);

    if(isNaN(n) || n<0 || n>999){
        console.log("Out of bound");
        rl.close();
        return;
    }

    let units=["zero","one","two","three","four","five","six","seven","eight","nine"];
    let teens=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];


    let words="";

    if(n>=100){
        words+=units[Math.floor(n/100)] + " hundred";
        if(n%100!==0) words+=" and "
    }

    let last=n%100;

    if(last>=20){
        words+= tens[Math.floor(last/10)];
        if(last%10!==0) words+= " " + units[last%10];
    }
    else if(last>=10){
        words+=teens[last-10];
    }
    else if(last>0){
        words+=units[last];
    }

    console.log(words);

    rl.close();
})