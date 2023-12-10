// Your code here
const snakeToCamel = sentence => {
    const words = sentence.split('_');
    const newSentence = [];

    for (let word of words)
        newSentence.push(word[0].toUpperCase().concat(word.slice(1).toLowerCase()));

    return newSentence.join('');
}


console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'