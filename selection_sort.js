console.log("Selection sorting")
var array = [10,2,8,5,6,4,7];
console.log("Before sorting ===> "+array)
for (var i = 0; i < array.length-1; i++) {
	for (var j = i+1; j < array.length; j++) {
		if(array[i]>array[j]){
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}
console.log("After sorting ===> "+array)

