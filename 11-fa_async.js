const { readFile, writeFile, write } = require('fs')

console.log("start")
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err)
        return;
    }
    const first = result
    readFile('./contents/subfolder/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err)
            return;
        }
        const second = result
        writeFile('./contents/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("done with this task")

        })
    })
})
console.log("starting next task")