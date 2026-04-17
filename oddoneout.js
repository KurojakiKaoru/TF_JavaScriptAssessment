function oddOneOut(arrOfInts) {
    let oddNumber;

    for(num of arrOfInts) {
        if(num % 2 !== 0) {
            oddNumber = num;
            break;
        }
    }

    return oddNumber || -1;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;