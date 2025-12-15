function add(a,b, fn){
    let res=a+b;
    fn(res);
}

function print(res){
    console.log(res);
}

function subtract(a,b, print){
    let res=a-b;
    print(res);
}

add(5,2,print)
subtract(5,2, print)