const { readFileSync, writeFileSync, writeFile } = require('fs')

console.log('start')

const first = readFileSync('./contents/first.txt', 'utf-8')
const second = readFileSync('./contents/subfolder/second.txt', 'utf-8')


console.log(first, second)

writeFileSync('./contents/result-sync.txt', `Here is the result : ${first}, ${second}`,
    { flag: 'a' })


console.log('done witht this task')
console.log('starting the next task')