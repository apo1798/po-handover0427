const array1 = [1,2,3]
const array2 =  [5,6,7]

const array1Copy = [...array1]
console.log(array1Copy)
console.log(...array1)

const array1AndArray2 = [...array2, ...array1]
console.log(array1AndArray2)
console.log([[...array1],[ ...array2]])
// shallow copy

const personInfo = {
  height: 183,
  weight: 72,
  handsome: 1000,
  name: 'Andy',
  money: {
    usd: '123123123123',
    ntd: '1000'
  }
}
const personInfo2 = {
  country: 'Taiwan',
  handsome: 200
}
// const personInfoCopy = {...personInfo, money: {...personInfo.money}}
// const personInfoCopy = structuredClone(personInfo)
const personInfoCopy = JSON.parse(JSON.stringify(personInfo))
personInfoCopy.height = 160
personInfoCopy.money.usd = '0'

console.log(personInfo, personInfoCopy)
// deep copy: sturcturedClone
// console.log(structuredClone(per))
console.log({...personInfo, ...personInfo2, name:'audi', name:'pohan'})

const product = {
  name:'fruit',sweetness: 1230, price:100,  // price： 100 => 150
  // 200 properties
}
// product = {...product, price:200}
const newProduct = {...product, price: 200}
const newProduct2 =  {...structuredClone(product), price: 200}

const isShowName = false
const person = {
  height: 200,
  weight:30, 
  ...(isShowName && {name: 'Adny'})
}

console.log(person)