let a = 1;
let b = 3;
let c = 15;

for(let i = 0; a < 10 && c > 5; i++){
  a += i;
  c -= b + i;
  i++;
}

console.log(a);
