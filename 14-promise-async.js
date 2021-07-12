const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//the path variable is to where you would want to go for the certain file
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFilePromise('./contents/first.txt', 'utf8')
        const second = await readFilePromise('./contents/subfolder/second.txt', 'utf8')
        await writeFilePromise('./contents/result-mind-grenade.txt', `This is aweseome ${first}`)
        console.log(first, second)
    }
    catch (error) {
        console.error(error)
    }
}

start()

// getText('./contents/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))


