function primeFinder(n) {
  const primeArray = [];
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeArray.push(i);
        }
    }
    return primeArray;
  }
  
  
  console.log(primeFinder(11))
