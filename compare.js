// const first = {a:2};
// const second = {a:2};
// const third = second;
// if(third === second){
//     console.log('they are same');
// }else{
//     console.log('difference');
// }


// do not use this method to compare object and array 
const first = {a:2,b:3,c:5};
const second = {a:2,c:5,b:3};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString,secondString);
// if(firstString === secondString){
//     console.log('same');
// }else{
//     console.log('difference');
// }

function compareObjects(first,second){
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if(firstKey.length === secondKey.length){
        for(const key of firstKey){
            if(first[key] !== second[key]){
                return false;
            }
        }
    }else{
        return false;
    }
}

const isSame = compareObjects(first,second);
console.log(isSame);