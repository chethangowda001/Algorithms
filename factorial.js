function fact(n){
    if(n===1) return 1;
    if(n===0) return 1;
    if(n<0) return "please enter postive value"
    let factorial = 1
    for(let i=1;  i<=n; i++){
         factorial*= i;

        
    }
    return factorial
}
 

console.log(fact(5));
console.log(fact(0));
console.log(fact(-50));


// BIG O- O(n)- linear