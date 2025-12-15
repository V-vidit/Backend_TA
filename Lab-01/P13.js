const readline=require("readline")

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter string: ", (str)=>{

    let vowel="aeiou";

    str = str.toLowerCase();

    let first=-1;
    for (let i = 0; i < str.length; i++) {
        if(vowel.includes(str[i])){
            first=i;
            break;
        }
    }

    let last=-1;
    for (let i = str.length-1; i >= 0; i--) {
        if(vowel.includes(str[i])){
            last=i;
            break;
        }
    }

    if (first==-1) {
        console.log("No Vowel in string");
    }
    else if(first==last){
        console.log("Only one vowel found at", first+1);       
    }
    else{
        let result=str.substring(first+1,last);

        console.log("First occurence of vowel at position: ", first+1);
        console.log("Last occurence of vowel at position: ", last+1);
        console.log("String between them: ",result);
        
    }

    rl.close();
})