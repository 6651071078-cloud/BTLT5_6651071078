function canChi(){
  var v=document.getElementById("nam").value.trim();
  var o=document.getElementById("kq");
  if(!/^\d+$/.test(v)||parseInt(v)<=0){
    alert("Năm phải là số nguyên dương");
    o.value="";return;
  }
  var y=parseInt(v);
  var can=["Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ"];
  var chi=["Thân","Dậu","Tuất","Hợi","Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi"];
  o.value=can[y%10]+" "+chi[y%12];
}
