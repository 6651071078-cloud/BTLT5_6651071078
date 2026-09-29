function tinhLuong(){
  var l=parseFloat(document.getElementById("luong").value);
  var h=parseFloat(document.getElementById("hs").value);
  document.getElementById("kq").innerHTML=l*h;
}
