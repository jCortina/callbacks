var countdownGenerator = function (x) {

  return function()	{
  	if (x > 0) {
  		var msg = "T-minus " + x + "...";
  	} else if (x === 0)	{
  		var msg = "Blast Off!!";
  	} else	{
  		var msg = "Rockets already gone, Bub!";
  	}
  	x--;
   	return console.log(msg);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!