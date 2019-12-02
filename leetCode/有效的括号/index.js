// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

// 方法一：
var isValid = function(s) {
    if(!(s.length % 2 == 0)) return false
    let old;
     while(s.length){
           old=s;
           s = s.replace('{}', '').replace('[]', '').replace('()', '');
           if(old==s)return false;
     }
    return true
};

// 方法二：
var isValid = function(s) {
    var Json = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c in Json) {
            var template = stack.length != 0 ? stack.pop() : '#';
            if (template !== Json[c]) {
                return false;
            }

        } else {
            stack.push(c);
        }
    }
   return stack.length == 0;
}