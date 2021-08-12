// Iteration 1: Names and Input

let hacker1 = "Borja Mari"

console.log(`"The driver's name is ${hacker1}!"`)

let hacker2 = "Pocholo"

console.log(`"The navigator's name is ${hacker2}!"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split(''))

console.log(hacker2.split("").reverse())

if ('Borja Mari'.localeCompare('Pocholo') === -1) {
    console.log("The driver's name goes first.")
} else if ('Borja Mari'.localeCompare('Pocholo') === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(text.split(" ").length);

for (let i = 0; i < text.length; i++) {
    if (text[i] === "et") {
        console.log(`The numbers of et is ${i}`;)
    }

// No busca el et, per lo hemos intentado