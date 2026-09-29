var d=parseInt(prompt("Nhập ngày:")),m=parseInt(prompt("Nhập tháng:")),y=parseInt(prompt("Nhập năm:"));
var t=new Date(y,m-1,d);
if(t.getDate()!=d||t.getMonth()!=m-1||t.getFullYear()!=y){
  console.log("Ngày không hợp lệ");
}else{
  var n=new Date(y,m-1,d+1);
  console.log("Ngày kế tiếp: "+n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear());
}
