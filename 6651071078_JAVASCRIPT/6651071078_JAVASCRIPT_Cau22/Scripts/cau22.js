function tinh(op){
  var a=parseFloat(document.getElementById("so1").value);
  var b=parseFloat(document.getElementById("so2").value);
  var o=document.getElementById("kq");
  if(isNaN(a)||isNaN(b)){o.innerHTML="Vui lòng nhập hai số hợp lệ";return;}
  if(op=="/"&&b==0){o.innerHTML="Không thể chia cho 0";return;}
  o.innerHTML=(op=="*")?a*b:a/b;
}
