// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
// 示例 1:
// 输入: 123
// 输出: 321
//  示例 2:
// 输入: -123
// 输出: -321
// 示例 3:
// 输入: 120
// 输出: 21
var reverse = function(x) {
    if(x<0){
        var newStr = x.toString().slice(1)
        x ='-' + newStr.toString().split('').reverse().join('')
    } else if (x>=0) {
        x = x.toString().split('').reverse().join('')
    }
    if(parseInt(x)<-Math.pow(2,31) || parseInt(x) > Math.pow(2,31) - 1) {
        return 0
    }
    return x
};
console.log(reverse(-123))
// var reverse = function(x) {
//     var numSign = Math.sign(x);
//     var num = Math.abs(x);
//     x=num.toString().split('').reverse().join('')*numSign
//     if(x < -Math.pow(2,31) || x > Math.pow(2,31) - 1){
//         return 0
//     }
//     return x
// }