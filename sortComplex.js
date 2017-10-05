var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
// sorting algorithm: 1st apha by name asc, else by age desc if name =
var sortStudents = function(std1, std2)	{
	var std1l = std1.name.toLowerCase();
	var std2l = std2.name.toLowerCase();
	if (std1l < std2l) return - 1;
	if (std1l > std2l) return 1;
	// student names the same, compare by age
	return std2.age - std1.age;
}
console.log(students.sort(sortStudents));
