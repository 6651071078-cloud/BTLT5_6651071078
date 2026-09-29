function laNguyenTo(n){
  if(n<2)return false;
  for(var i=2;i*i<=n;i++)if(n%i==0)return false;
  return true;
}
var n=parseInt(prompt("Nhập số nguyên dương:"));
if(isNaN(n)||n<=0)alert("Giá trị không hợp lệ");
else alert(n+(laNguyenTo(n)?" là số nguyên tố":" không phải số nguyên tố"));
