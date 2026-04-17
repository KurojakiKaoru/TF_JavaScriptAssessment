function strClean(arrOfStrs) {
    const cleanedStrings = [];

    for(str of arrOfStrs) {
        cleanedStrings.push(str.trim().replace(/[2-9]/g, '').replaceAll(' ', '_').replaceAll('0', 'zero').replaceAll('1', 'one'));
    }

    return cleanedStrings;
}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;