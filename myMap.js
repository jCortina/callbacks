var charCount = function(word) {return word.length};
var upperCase = function(word) {return word.toUpperCase()};
var reverseL  = function(word) {return word.split('').reverse().join('')}; 	 


var words = { wordsArr: ["ground", "control", "to", "major", "tom"],

	map: function(callBack)	{
		var resultArr = [];
		for (ix = 0; ix < this.wordsArr.length; ix++)	{
			resultArr.push(callBack(this.wordsArr[ix]));
		} 
		return resultArr;
	},

};

console.log(words.map(charCount));
console.log(words.map(upperCase));
console.log(words.map(reverseL));