function partsSums(ls) {
  const result = []
  let sum = 0
  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i]
    result.push(sum)
  }
  result.reverse().push(0)
  return result
}

// https://www.codewars.com/kata/5ce399e0047a45001c853c2b
