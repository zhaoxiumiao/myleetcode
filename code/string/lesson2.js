export default (str) => {
    //'00110011'
    //['0011', '01', '1100', '10', '0011', '01']
    let arr = []
    let k = 0,n
    for(let i = 0;i < str.length;i++){
        let str1 = str.charAt(i)
        for(let j = i + 1;j < str.length;j++){
            n = j
            if(str1 === str.charAt(j)){
                n++
            }else{
                break
            }
        }
        if(test(str.slice(i,n),str.substr(n,str.slice(i,n).length))){
            arr[k] = str.slice(i,n) + str.substr(n,str.slice(i,n).length)
            k++
        }
    }
    function test(sl,su){
        let b = true
        for(let i = 0;i < sl.length;i++){
            if(sl.split('')[i] === su.split('')[i]){
                b = false
            }
        }
        if(sl === '' || su === ''){
            b = false
        }

        return b
    }
    return arr
}