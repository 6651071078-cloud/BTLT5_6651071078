var year=2024;
var leap=(year%4==0&&year%100!=0)||year%400==0;
document.write(year+(leap?" là năm nhuận":" không phải năm nhuận"));
