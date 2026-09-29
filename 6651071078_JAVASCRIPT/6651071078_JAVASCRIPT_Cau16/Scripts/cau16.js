var HinhTru={radius:10,height:15};
var V=Math.PI*Math.pow(HinhTru.radius,2)*HinhTru.height;
document.write("a) Thể tích: "+V.toFixed(2)+"<br>");
HinhTru.height=30;
var S=2*Math.PI*HinhTru.radius*(HinhTru.radius+HinhTru.height);
document.write("b) Diện tích toàn phần: "+S.toFixed(2));
