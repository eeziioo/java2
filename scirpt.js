let ism = prompt('Ismiszni kiriting')
let familiya = prompt('familiyangizni kiriting')
let yosh = prompt('Qaysi kursda o`qimoqchisiz')

let res = `
Ism: ${ism}
Familiya: ${familiya}
Qaysi kursda o'qimoqchisiz: ${yosh}
`
console.log(res)

confirm('Ma`lumotlaringiz hammasi to`gimi')

let round = (Math.random(1)) * 100000000000000000

console.log(round);

alert(`
1. ${ism}
2. ${familiya}
3. ${yosh}
4. Sizninig Id raqamingiz: ${round}
`)
