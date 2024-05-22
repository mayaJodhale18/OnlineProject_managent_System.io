let arr =[1,2,3,4];

// let a = arr.reduce((prev,curr,index,arr)=>{

//     console.log(index)
//     console.log(arr)

//      return prev+curr
// })

// console.log(a)

let b =arr.filter((curr,index,array)=>{

    console.log(curr)
    console.log(index)
    return curr%2==0
})

console.log(b)