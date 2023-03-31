function EsNarciso(n){
    let suma = 0;
    for(let i = 0; i<n.length; i++){
        suma += Math.pow(parseInt(n[i]),n.length);
    }
    return suma == n;
}