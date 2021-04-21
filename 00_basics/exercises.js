// const inputs = [0, 1, '', 'text', undefined, null, [], [2, 3]]

// const isTruthy = (input) => {
//     if (input) {
//         if (typeof input === "object") {
//             if (!input.length) {
//                 return false
//             } else {
//                 return true
//             }
//         } else {
//             return true
//         }
//     } else {
//         return false
//     }
// }

// for (let input of inputs) {

//     console.log(`${input} is ${isTruthy(input)}`)
// }


// const limits = (values) => {
//     // if (!values.length) {
//     //   return [undefined, undefined]
//     // }
//     let low = values[0]
//     let high = values[0]
//     for (let v of values) {
//         if (v < low) low = v
//         if (v > high) high = v
//     }
//     return [low, high]
// }

// console.log(limits([[]]))


// const first = [3, 7, 8, 9, 1]
// console.log(`aggregating ${first}`)
// let total = 0
// for (let d of first) {
//     total += d
// }
// console.log(total)

// const second = [0, 3, -1, NaN, 8]
// console.log(`aggregating ${second}`)
// total = 0
// for (let d of second) {
//     total += d
// }
// console.log(total)

const verbose_sum = (first, second) => {
    console.log(`Going to add ${first} to ${second}`)
    let total = first + second
    return total
    console.log(`Finished summing`)
}

var result = verbose_sum(3, 6)
console.log(result)
