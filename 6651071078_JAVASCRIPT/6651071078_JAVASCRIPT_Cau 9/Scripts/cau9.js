var s="need not to know".replace("to ","");
s="need not to know";
var kq=s.split(" ").map(function(w){return w.charAt(0).toUpperCase()+w.slice(1);}).join(" ");
document.write(kq);
