const path = require('path')
const fs = require('fs')

let svgFolder = path.join(__dirname, '../static/svg_icons/')
let jsPath = path.join(__dirname, '../src/assets/icons.js')

let svgFiles = fs.readdirSync(svgFolder) //获得一个数组，其中包含文件名以及子目录

let symbols = svgFiles.map(function(filename) {
    let absolutePath = path.join(svgFolder, filename)
    let fileContent = fs.readFileSync(absolutePath, 'utf-8') //获得文件内容
    let name = path.basename(filename, '.svg') // 去除.svg后缀
    return fileContent
        .replace(/<\?.+?\?>/g, '') // 去掉 <?xml version="1.0" standalone="no"?>
        .replace(/<!.+?>/g, '') // 去掉 <!DOCTYPE svg PUBLIC ...>
        .replace(/version=".+?"/g, '')
        .replace(/xmlns=".+?"/g, '')
        .replace(/class=".+?"/g, '')
        .replace(/fill=".+?"/g, '')
        .replace(/stroke=".+?"/g, '')
        .replace(/<svg /, `<svg id="icon-${name}" `)
        .replace(/\bsvg\b/g, 'symbol')
        .replace(/\s{2,}/g, ' ')
}).join('\n')

let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`

fs.writeFileSync(jsPath, js, { flag: 'w' })