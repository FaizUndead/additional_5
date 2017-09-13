module.exports = function check(str, bracketsConfig) {
  function check(astr, config) {
  var stack = [];
  var opens = getOpens(config);
  var closes = getCloses(config);
  var str = astr.split("");
  var same = true;
  for (var i = 0; i < str.length; i++) {
    var char  = str[i];
    var index = opens.indexOf(char); 
    if(opens.includes(char)) {
      stack.push(closes[index]);
      
    }else if(closes.includes(char)){
      if (stack.pop() != char){
        return false;
      }
    }else {
      if(same) {
        stack.push(char);
      }else if(stack.pop() != char){
        return false;
      }
      same = !(same);

    }

    
  }
  if(stack.length != 0){
    return false;
  }
  return true;

}
console.log(check('|(|)', [['(', ')'], ['|', '|']]));

function getOpens(arr) {
  var opens = [];
  arr.forEach(function(i){
    if(i[0] != i[1]){
      opens.push(i[0]);
    }
  })
  return opens;
}
function getCloses(arr) {
  var closes = [];
  arr.forEach(function(i){
    if(i[0] != i[1]){
      closes.push(i[1]);
    }
  })
  return closes;
}

}
