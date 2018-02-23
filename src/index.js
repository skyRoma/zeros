module.exports = function getZerosCount(number) {
 var count=0;
 while(number>=5){
 number/=5;
 count += Math.floor(number);
}
return count;
}
