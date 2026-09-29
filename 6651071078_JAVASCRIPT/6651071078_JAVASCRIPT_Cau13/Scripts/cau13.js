var n=50,kq=[];
for(var i=2;i<n;i++){
  var ok=true;
  for(var j=2;j*j<=i;j++)if(i%j==0){ok=false;break;}
  if(ok)kq.push(i);
}
document.write("Các số nguyên tố nhỏ hơn "+n+": "+kq.join(", "));
