


// function work(a,b,test) {
// 	console.log(a+b);
// 	test(a,b)
// }

// function test(a,b) {
// 	// body...
// 	console.log(a-b);
// }
// work(2,4,test);

// let a = [1,2,3,4,5,6,7,8,9,10]

// let b = [1,2,3,4,5,6,7,8,9,10,9]

// var sum  =0 ;
// for (var i = 0; i < b.length; i++) {
// 	sum = sum+b[i];
// }
// // console.log(sum-(a.length*(a.length+1)/2))



// let numbers = [ 2, 4, 3, 5, 7, 8, 9 ];
// let numbersWithDuplicates = [ 2, 4, 3, 5, 6, -2, 4, 7, 8, 9 ];
// var duplicates = [ 5,7,6,4,2,5,4,2,7,5,1,3 ];


// function printPairs(array,summ){
// 	for (var i = 0; i < array.length; i++) {
// 		for (var j = i+1; j < array.length; j++) {
// 			if((array[i]+array[j])==summ){
// 				console.log("found pair ===> "+array[i]+" "+array[j] )
// 			}
// 			else{
// 				// console.log("not a pair ===> "+array[i]+" "+array[j] )
// 			}
			
// 		}
// 	}
// }

// // printPairs(numbers,7)
//  //printPairs(numbersWithDuplicates,7)

// var dupe = [];
// for (var k = 0; k < duplicates.length; k++) {
// 	if(duplicates[Math.abs(duplicates[k])]>=0){
// 		console.log("if====>"+duplicates[Math.abs(duplicates[k])])
// 		duplicates[Math.abs(duplicates[k])]=-duplicates[Math.abs(duplicates[k])]
// 	}
// 	else{
// 		dupe.push(duplicates[k]);
// 		console.log("else===>"+duplicates[Math.abs(duplicates[k])])
// 	}
// }

//console.log(duplicates);
//console.log(dupe);


var x = "dt$gsdafs$asdf$sdfasdf$";
var y=[];
console.log(x)
for(var m=0;m<x.length;m++){
		if(x[m]=="$"){
			y[m]=x[m]
		}
		else{
			y[m]=0
		}
}
console.log(y)

// for (var  j = x.length - 1;j >= 0; j--) {
// 	if(x[j]!="$"){
// 		let newPos = x.length-1-j //4-1-1
// 		console.log(x[j])
// 			y[newPos]=x[j]
// 		}
// }

// for (var i = 0; i < x.length; i++) {
// 	if(x[i]!="$"){
// 		console.log(x[i])
// 		console.log(y[i])
// 		// console.log(newPos)
// 	 let newPos = x.length-1-i;
// 	 console.log(newPos)
// 	 y[newPos]=x[i];
// 	}
// }
var j=0;
var i=0;
while(i<x.length){

	var pos = x.length-1-i;
	if(y[pos]!="$" &&x[j]!="$" ){
		y[pos]=x[j];
		j++;
		i++;
	}
	else if(x[j]=="$"){
		j++;
		
	}
	else{
		i++;
	}


	
}
console.log(y)