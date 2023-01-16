// code your solution here



function superbowlWin(record){
    let value = null;
    let foundItem = record.find(function(item){
        return item.result == 'W';
        
        })
   if( foundItem){
    return foundItem.year;
   }
   else{
    return undefined;
   }
}


/* ----- This also passes --------
function finder(array, func){
    let result = null;
    for(let item of array){
        if(func(item) === true){
            result = item;
            break;
        }
    }
    return result;
}

console.log(finder(record, superbowlWin));

---------------------------------- */





/* This also passes */
function superbowlWin2(record) {
    for(let i = 0; i < record.length; i++){
        if(record[i].result == "W"){
            return record[i].year;
        }
    }
}

