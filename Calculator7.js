let a = 10, b= 21;

let choice = "*";

switch(choice){
    case "+":
        console.log(a+b);
        break; 
    case "-":
        console.log(a-b);
        break; 
    case "*":
        console.log(a*b);
        break; 
    case "/":
        console.log(a/b);
        break;
    case "%":
        console.log(a%b);
        break;  
    default:
        console.log("Enter correct choice");
        break;
}