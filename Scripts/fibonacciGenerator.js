function fibonacciGenerator(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }
    return sequence.slice(0, n);
}