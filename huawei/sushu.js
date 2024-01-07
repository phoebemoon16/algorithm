/**
 * 就一个数是哪2个数的素数之奇
 * 没有就返回 [-1, -1]
 * 
 * 素数:就是质数，特点是能被1和自己整除
 */

function isPrmise(n) {
    n = parseInt(n)
    if(n === 1) {
        return false
    }

    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
      if(n % i === 0) {
          return false
      }
    }

    return true
}

function getRestult(n) {
    if(isPrmise(n)) {
        return "-1,-1"
    }
    for(let i =2; i<n;i++) {
        if(n % i === 0) {
            let j = n / i
            console.log(i,j)
            if(isPrmise(i) && isPrmise(j)) {
                return i < j ? `${i} ${j}` : `${j} ${i}`
            } else {
                break;
            }
        }
    }
    return '-1,-1'
}

console.log(getRestult(15))
console.log(getRestult(27))