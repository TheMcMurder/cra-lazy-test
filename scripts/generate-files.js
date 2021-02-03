const fs = require("fs")
const path = require("path")
const numberToGenerate = 50
const basePath = path.resolve(__dirname, '../src/generated/')

for(let i = 0; i < numberToGenerate; i++) {

  const writeStream = fs.createWriteStream(`${basePath}/generated_${i}.js`)
  writeStream.write(`
    export default function generated_${i} () {
      return <div>generated ${i}</div>
    }
  `)
  writeStream.end()
}
console.log(`Generated ${numberToGenerate} file(s)`)