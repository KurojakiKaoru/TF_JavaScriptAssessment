function fizzBuzz(start, end, skip) {
    const fizzyBuzzy = [];

    for(let i = start; i <= end; i++) {
        if(i.toString().includes(skip)) continue;
        else fizzyBuzzy.push(i);
    }

    return fizzyBuzzy;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;