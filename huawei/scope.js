var a = 10

function fn(){
    var a
    if('222'.length > 0) {
        var a = 20
        console.log(a, '11') // 20 111
    } else {
        console.log(a, '222') // undefined 222
    }
}

fn()

console.log(a)

const b = '11'
console.log(b)
bb = '22'
console.log(b)

const c = {age: 12}
console.log(c)
c.age = 13
console.log(c)
