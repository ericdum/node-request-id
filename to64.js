dic = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9","+","/"
]

function to64( num ){
  var s = 64;
  var l = num % s;
  var q = parseInt(num / s);
  if(q > 0)
    return to64( q ) + dic[l];
  else
    return dic[l];
}

module.exports = to64;
