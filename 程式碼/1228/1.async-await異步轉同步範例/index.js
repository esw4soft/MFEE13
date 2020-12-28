// setTimeout有異步執行的特性 a -> c -> b
// console.log('a')

// setTimeout(function(){ console.log('b') },0)

// console.log('c')


// 轉為同步執行的語法 a -> b -> c
async function test(){
    console.log('a')

    const resolvedValue = await new Promise(function(resolve, reject) {
        setTimeout(function(){ resolve('b') },3000)
    })

    console.log(resolvedValue)

    console.log('c')
}

test()