var pushPop = [22, 5, 67, 33];

pushPop.push(55);
pushPop.unshift(1);
pushPop.pop();
pushPop.shift();
var remain = pushPop.shift();
console.log(pushPop);
console.log(remain);
