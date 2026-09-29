var n=parseInt(prompt("Nhập n nguyên dương:"));
var tong=0;
for(var k=n;k>=1;k=Math.floor(k/2))tong+=k;
alert("Tổng = "+tong);
