function cardsPart(deck) {
  // 对这副牌进行排序
  deck.sort((a,b) => a-b)
  var min = Number.MAX_VALUE
  let dst = []
  if(deck.length < 1) return false
  else if(deck.length = 2){
    if(deck[0]!==deck[1]) return false
  }
  for(let i = 0, len = deck.length, tmp = []; i < len; i++){
    tmp.push(deck[i])
    for(let j = i + 1; j < len - 1; j++) {
      if (deck[i] === deck[j]) {
        tmp.push(deck[j])
      }else{
        if(min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp.length = 0
        i = j
        break
      }
    }
  }
  if(min <= 1) return false
  dst.forEach( item => {
    if (item.length % min !== 0){
      return false
    }
  })
  return true
}
console.log(cardsPart([1,1,2,2,3,3,3]))