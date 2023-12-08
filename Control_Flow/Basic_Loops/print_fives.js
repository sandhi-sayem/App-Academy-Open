const printFives = max => {
    for (let i = 0; i < max; i++)
        if (i % 5 === 0) console.log(i);
}
// Example:

printFives(20) // prints out:
0
5
10
15