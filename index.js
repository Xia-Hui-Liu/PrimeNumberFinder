function primeFinder(n) {
    let result = [2, 3];
    for (let i = 4; i<= n; i++) {
      let flag = true;
      for (let j = 2; j <= i/2; j++ ) {
        if (i % j == 0) {
          flag = false;
        }
      }
      if (flag) {
        result.push(i)
      }
  }
  return result;
  }
  
  
  console.log(primeFinder(11))