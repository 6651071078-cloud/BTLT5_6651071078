var goc=1000000,lai=8,nam=5;
var tong=goc*Math.pow(1+lai/100,nam);
document.write("Số tiền sau "+nam+" năm: "+Math.round(tong).toLocaleString("vi-VN")+" đồng");
