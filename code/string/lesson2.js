// export default (str) => {
//     //'00110011'
//     //['0011', '01', '1100', '10', '0011', '01']
//     let arr = []
//     let k = 0,n
//     for(let i = 0;i < str.length;i++){
//         let str1 = str.charAt(i)
//         for(let j = i + 1;j < str.length;j++){
//             n = j
//             if(str1 === str.charAt(j)){
//                 n++
//             }else{
//                 break
//             }
//         }
//         if(test(str.slice(i,n),str.substr(n,str.slice(i,n).length))){
//             arr[k] = str.slice(i,n) + str.substr(n,str.slice(i,n).length)
//             k++
//         }
//     }
//     function test(sl,su){
//         let b = true
//         for(let i = 0;i < sl.length;i++){
//             if(sl.split('')[i] === su.split('')[i]){
//                 b = false
//             }
//         }
//         if(sl === '' || su === ''){
//             b = false
//         }

//         return b
//     }
//     return arr
// }

export default (str) => {
    let r = []

    function match(str) {
        let j = str.match(/^(0+|1+)/)[0]
        let o = (j[0] ^ 1).toString().repeat(j.length)
        let reg = new RegExp(`^(${j}${o})`)
        if(reg.test(str)){
            return RegExp.$1
        }else{
            return ''
        }
    }

    for(let i = 0; i < str.length - 1; i++){
        let sub = match(str.slice(i))
        if(sub){
            r.push(sub)
        }
    }
    return r
}