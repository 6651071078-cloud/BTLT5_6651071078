var bin="11011011",dec=0;
for(var i=0;i<bin.length;i++){
  dec+=parseInt(bin.charAt(bin.length-1-i))*Math.pow(2,i);
}
document.write(bin+"<sub>2</sub> => "+dec+"<sub>10</sub>");
