function duplicates(arr) {
    var a = []
    var b = []
    for(var i = 0; i < arr.length; i++){
        if(a.indexOf(arr[i]) < 0){
            a.push(arr[i])
        }else{
          if(b.indexOf(arr[i]) < 0 )
            b.push(arr[i])
        }
    }
    a = null
    return b
}
console.log(duplicates([1,1,1,1,1,1,1,1,1]))