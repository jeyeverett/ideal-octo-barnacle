function clean (array) {
    array = array.sort((a, b) => a - b);
    let temp = [];
    let result = [];

    while (array.length > 0) {
        while (array[0] === array[1]) {
            temp.push(array.shift());
            if (array[0] !== array[1]) {
                temp.push(array.shift());
                result.push(temp);
                temp = [];
            }
        }
        if ((array[0] !== array[1])) {
            result.push(array.shift());
        }
        if (array.length === 1) {
            result.push(array.shift());
        }
    }
    return result;
}

console.log(clean([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]));

function clean2 (array) {
    array = array.sort((a, b) => a - b);
    let strArray = [];
    let numArray = [];
    let result = [];

    while (array.length > 0) {
        if (typeof array[0] === 'string') {
            strArray.push(array.shift());
        } else if (typeof array[0] === 'number') {
            numArray.push(array.shift());
        }
    }
    result.push(numArray);
    result.push(strArray);
    return result;
}

console.log(clean2(['1',2,'4','591',392,391,'2',5,10,2,'1',1,'1','20',20]));

function target (array, num) {
    for (let item of array) {
        for (let i = 1; i < array.length; i++) {
            if (item + array[i] === num) {
                return [item, array[i]];
            }
        }
    }
}

console.log(target([1,2,3,4,5,6,7,8], 10));

function hexToRGB (color) {
    if (typeof color === 'string') {
        
    } else if (typeof color === 'number') {

    }
}