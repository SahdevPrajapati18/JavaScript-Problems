//Equilateral if a=b=c
//Isoceles if a==b or b==c or c==a 
//Scalene if a!=b!=c

let a=10,b=10,c=30;

if(a===b && b===c){
    console.log("Equilateral Triangle");
}
else if(a===b || b===c || c===a)
{
    console.log("Isoceles Triangle");
}
else{
    console.log("Scalene Triangle");
}