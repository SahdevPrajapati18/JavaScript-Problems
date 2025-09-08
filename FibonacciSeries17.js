let position =20;

let pos0 = 0;
let pos1 = 1;

if(position < 1){
    console.log("Invalid Number of Terms");
    return;
}

console.log(pos0);
console.log(pos1);

for(let i=3;i<=20;i++){
    let current = pos0 + pos1;
    pos0 = pos1;
    pos1 = current;
    console.log(current);
}
