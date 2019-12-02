// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 示例 1:
// 输入: 121
// 输出: true
// 示例 2:
// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:
// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。


// var isPalindrome = function(x) {
//     return x == x.toString().split('').reverse().join('')
// };

var isPalindrome = function (x) {
    let n = 0, y = x;
    //把x的每一位数倒过来组装成n
    while (x) { 
        n = n * 10 + x % 10;  
        x = (x - x % 10) / 10; 
    }
    return y >= 0 && n === y;
};
console.log(isPalindrome(121))