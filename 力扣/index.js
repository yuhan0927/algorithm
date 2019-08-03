function remove(arr, item) {
  return arr.filter(value => value != item)
}
console.log(remove([1,2,3,4,5,2],2))
