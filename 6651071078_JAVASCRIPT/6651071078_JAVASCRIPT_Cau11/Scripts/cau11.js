function daoNguoc(n){
  var r=0;n=Math.abs(n);
  while(n>0){r=r*10+n%10;n=Math.floor(n/10);}
  return r;
}
document.write("654321 => "+daoNguoc(654321));
