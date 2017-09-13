module.exports = function check(str, bracketsConfig) {
  
  var stack = [];
  var opens = getOpens(bracketsConfig);
  var closes = getCloses(bracketsConfig);
  var astr = str.split("");
  var same = true;
  for (var i = 0; i < astr.length; i++) {
    var char  = astr[i];
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
