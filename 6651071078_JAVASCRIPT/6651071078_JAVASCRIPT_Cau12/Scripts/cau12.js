function luyThua(b,n){
  var r=1;
  for(var i=0;i<n;i++)r*=b;
  return r;
}
var b=2,n=10;
document.write(b+"^"+n+" = "+luyThua(b,n));
