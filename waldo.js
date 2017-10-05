// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(ix) {
  console.log("Found him! He is at location: " + ix);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);