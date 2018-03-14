function fazer(x){
    return x + 5;
}

let a = 0;
let b = 5;

for(let i = 0; i < 40; i++){
    a += fazer(i);
    i += a + b++;
}

console.log(a);