var ch=["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"];
function docSo(n){
  var c=Math.floor(n/10),u=n%10;
  var s=(c==1)?"mười":ch[c]+" mươi";
  if(u==0)return s;
  if(u==1&&c>1)return s+" mốt";
  if(u==5)return s+" lăm";
  if(u==4&&c>1)return s+" tư";
  return s+" "+ch[u];
}
var n=parseInt(prompt("Nhập số nguyên có 2 chữ số:"));
if(isNaN(n)||n<10||n>99)alert("Không phải số có 2 chữ số");
else alert(n+": "+docSo(n));
