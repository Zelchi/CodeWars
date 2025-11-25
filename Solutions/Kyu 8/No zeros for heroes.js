function noBoringZeros(n) {
    let x = String(n);

    if (x[x.length - 1] == '0' && n != 0) x = x.slice(0, -1);

    return Number(x);
}

console.log(noBoringZeros(110));
console.log(noBoringZeros(96000));