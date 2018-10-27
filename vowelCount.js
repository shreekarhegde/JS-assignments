// Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Dct Academy" would return 3).
// Examples:
// INPUT: vowelCount("Good Job");
// OUTPUT: 3
// INPUT: vowelCount('Yankees');
// OUTPUT: 3
// INPUT:vowelCount('symphysy');
// OUTPUT:0
    

function vowelCount(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        console.log(str[i]);
        
     if((str[i]) === 'a'||(str[i]) === 'e' || (str[i]) === 'i'||(str[i]) === 'a' ||(str[i]) === 'o'||(str[i]) === 'u'){
            //console.log(str[i]);
            count = count + 1;
            //console.log(count);
        }
      else if(str[i]=='')
        {
        count == 'empty string';
        }
        
    }
     return count;
}

console.log(vowelCount('yankees'));
//  console.log(vowelCount('yankees'));
// console.log(vowelCount('symphysys'));