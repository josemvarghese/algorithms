console.log("Bubble sorting")
var array = [10,2,8,5,6,4,7];
console.log("Before sorting ===> "+array)
for (var i = 0; i < array.length-1; i++) {
	for (var j = 0; j < array.length-i-1; j++) {
		console.log("Between sorting ===> "+array)
		if(array[j]>array[j+1]){
			let temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
		}
	}
}
console.log("After   sorting ===> "+array)

