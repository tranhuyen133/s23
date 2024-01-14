var n =+prompt("Nhập số:");
for(let i = 1;i<=100;i++);
    if(n%3==0){
        console.log('FIZZ');
    }else if(n%5==0){
        console.log('Buzz');
    }else if(n%3==0&&n%5==0){
        console.log('FIZZ Buzz');
    }else{
        console.log(i);
    }