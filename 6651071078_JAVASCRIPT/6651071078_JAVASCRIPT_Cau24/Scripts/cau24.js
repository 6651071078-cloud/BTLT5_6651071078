function xuatThu(){
  var d=parseInt(document.getElementById("ngay").value);
  var m=parseInt(document.getElementById("thang").value);
  var y=parseInt(document.getElementById("nam").value);
  var ten=["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"];
  var t=new Date(y,m-1,d);
  var o=document.getElementById("kq");
  if(t.getDate()!=d||t.getMonth()!=m-1)o.innerHTML="Ngày không hợp lệ";
  else o.innerHTML=ten[t.getDay()]+" Ngày "+d+" tháng "+m+" năm "+y;
}
