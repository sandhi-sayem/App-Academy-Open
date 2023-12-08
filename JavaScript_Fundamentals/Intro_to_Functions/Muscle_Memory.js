function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
}

console.log(sayHello("world"));

function sayGoodbye(name) {
    return `Bye ${name}.`;
}

console.log(sayGoodbye('sam'));

const getAge = age => {
    return new Date().getFullYear() - age;
}

console.log(getAge(1983));