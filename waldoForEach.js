// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
	arr.forEach(function(element, ix) 
		{if (element === "Waldo") found(element, ix) });
}

function actionWhenFound(element, ix) {
  console.log("Found him! He is at location: " + ix);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);