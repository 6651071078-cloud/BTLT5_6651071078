var gia={"Bún bò":20000,"Hủ tiếu":18000,"Bánh canh":17000,"Phở bò":19000,"Nuôi":15000,"Bánh mì thịt":12000,"Bánh cuốn":15000,
"Cà phê đá":12000,"Cà phê sữa đá":15000,"Chanh dây":13000,"Chanh muối":12000,"Xí muội":14000,"Sữa tươi":13000,"Cam vắt":17000};
function tinhTien(){
  var sel=[].slice.call(document.getElementById("food").selectedOptions).concat([].slice.call(document.getElementById("drink").selectedOptions));
  var tong=0,h="<tr><th>Các món đã dùng</th><th>Tiền</th></tr>";
  sel.forEach(function(o){tong+=gia[o.value];h+="<tr><td>"+o.value+"</td><td>"+gia[o.value]+"</td></tr>";});
  if(document.getElementById("dem").checked)tong*=1.1;
  h+="<tr><td>Tổng tiền</td><td>"+Math.round(tong)+" đồng</td></tr>";
  document.getElementById("bill").innerHTML=h;
}
