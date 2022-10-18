let fib = [0n, 1n];
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

  if (fib[n]) {
    return fib[n];
  }

  return fibonacci(n);
}

console.log(fibonacci(1000));
