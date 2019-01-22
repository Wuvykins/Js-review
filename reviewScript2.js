
function objEquals(obj, obj2)
{
    //obj == obj2?true:false;
    let key = Object.keys(obj);
    let key2 = Object.keys(obj2);
    if (key.length !== key2.length)
    {
        return false;
    }
    for (let i = 0; i<key.length; i++)
    {
        if (key[i] !== key2[i])
        {
            return false;
        }
        if (JSON.stringify(obj[key[i]]) !== JSON.stringify(obj2[key2[i]]))
        {
            return false;
        }
    }
    return true;
}

function flatten(arrays)
{
    let newArray = [];

    arrays.reduce(function(accumulator, currentValue){
        newArray = newArray.concat(currentValue)
    },0);
    return newArray;
}

var obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));


console.log(objEquals(obj, {here: 1, object: 2}));

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));


console.log(objEquals(obj, {here: {is: "an"}, object: 0}));


console.log(objEquals(obj, {here: {is: "another"}, object: 2}));

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));


console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));

var arr = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arr));
