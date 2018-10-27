// Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.

// Examples:

// INPUT: countUpThenDown(2)
// OUTPUT: [0, 1, 2, 1, 0]
// INPUT: countUpThenDown(0)
// OUTPUT: [0]

function input(maxcount){
    result= [];
    var maxcount;
    
    for(var i = 0; i < maxcount; i++){
    
        result.push(i);}
        if(i === 2){
            for(var i = 2; i >= 0; i--){
            result.push(i);
            }
        }
       
	
        return result;
    
        }
       



console.log(input(2));