const password = process.argv[2] // 'IVEGOTTHEPWR'
const message = process.argv[3] // 'hello'
// remember that numbers passed in as arguments will be string values
// so convert them to numbers to avoid shenanigans
const age = parseInt(process.argv[4])

console.log(process.argv) // let's see what is in here!