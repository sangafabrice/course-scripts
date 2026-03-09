function genNum(a, b, N) {
    if (b <= a) {
        throw new Error("b must be greater than a");
    }

    const rangeSize = b - a + 1;
    if (N > rangeSize) {
        throw new Error("N cannot be larger than the number of available values");
    }

    // create array [a, a+1, ..., b]
    const arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    // Fisher-Yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.slice(0, N);
}

console.log(genNum(-1000, 1000, 1000));
