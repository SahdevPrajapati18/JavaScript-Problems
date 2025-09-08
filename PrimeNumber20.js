let number=34;
let count=0;
if(number<=1){
    console.log("Not a prime number");
}

for(let i=1;i<=number;i++){
    if(number%i==0){
        count++;
    }
}
if(count>2){
    console.log("Not a prime number");
}
else{
    console.log("Prime Number")
}