// o(1)
// o(n)

// o(n^2)
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      /*
       * pseudo code
       * sum += charCode; */
    }
  }
  return sum;
}

// o(n^3)
function sum_char_codes_cubed(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        /*
         * pseudo code
         * sum += charCode; */
      }
    }
  }
  return sum;
}

// o(nlogn)
//Quick sort
//
//

// o(logn)
// binary search trees
//
//

//o(sqrt(n))
//
