function tables(a){
    var emptytable = [];

    for(var i = 0; i < a.length; i++){
        if(a[i] === 'notbooked'){
            emptytable.push(i);
            
        }
    }
    return emptytable;

}

a = ['notbooked','booked','notbooked'];
console.log(tables(a));