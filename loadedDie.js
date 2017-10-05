function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var pos = -1;

  return function() {
	pos +=1;   
    if (pos >= list.length)	{
    	pos = 0;
    }
    return list[pos];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 4
