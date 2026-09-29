var a=parseFloat(prompt("Nhập a:")),b=parseFloat(prompt("Nhập b:")),c=parseFloat(prompt("Nhập c:"));
var kq;
if(a==0){
  if(b==0)kq=(c==0)?"Vô số nghiệm":"Vô nghiệm";
  else kq="Nghiệm x = "+(-c/b);
}else{
  var d=b*b-4*a*c;
  if(d<0)kq="Phương trình vô nghiệm";
  else if(d==0)kq="Nghiệm kép x = "+(-b/(2*a));
  else kq="x1 = "+((-b+Math.sqrt(d))/(2*a))+", x2 = "+((-b-Math.sqrt(d))/(2*a));
}
alert(kq);
