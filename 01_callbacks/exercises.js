// const doubleInPlace = (arr) => {

//     return arr.forEach((value, index, container) => {
//         container[index] = value * 2
//     })
// }


// const vals = [1, 2, 3]
// doubleInPlace(vals)
// console.log(vals)


data = [
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'NL' },
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'NL' },
    { 'date': '1977-7-16', 'sex': 'F', 'species': 'DM' },
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'DM' },
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'DM' },
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'PF' },
    { 'date': '1977-7-16', 'sex': 'F', 'species': 'PE' },
    { 'date': '1977-7-16', 'sex': 'M', 'species': 'DM' }
]

const processRecords = (values) => {
    // filter on sex: F
    values.forEach((value, index, array) => {
        array[index]["seq"] = index + 1
        array[index]["year"] = array[index]["date"].slice(0, 4)
    })
    values = values.filter((x) => { return x["sex"] === "F" })
    // values.forEach((value, index, array) => {
    // replace date with year
    // add sequence
    // });
    return values
}

console.log(processRecords(data))
