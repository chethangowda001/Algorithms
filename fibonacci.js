function fib(n) {
    let fibseq =[0,1];

    for(let i=2; i<n; i++){
     let   fibseq1 = fibseq[i-1]+fibseq[i-2];
        fibseq.push(fibseq1)
    }
    return fibseq
}

console.log(fib(4));