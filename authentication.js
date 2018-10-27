//  INPUT: authenticate(passwords, 'Password123');
//   OUTPUT: 'authenticated'
//   INPUT: authenticate(passwords, 'Balrog');
//   OUTPUT: 'not authenticated'





  function authentication(a,b){
      for(var i=0; i<a.length; i++){
          if(a[i] == b){
              return 'authenticated';
            }
        }
      return 'not authenticated';
    }
var passwords = ['Password123','dct@academy', 'qwerty','secret123','gopro123','harryp@tter'];

console.log(authentication(passwords,'harryp@tter'));
