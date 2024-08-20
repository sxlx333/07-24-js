// SWITCH work only when you want to check if a variable is equal to a specific value

const favoriteAnimal = "jaguar";

// if (favoriteAnimal === "cat") {
//     console.log("Cats are great");
// } else if (favoriteAnimal === "dog") {
//     console.log("Dogs are kinda loud");
// } else if (favoriteAnimal === "shark") {
//     console.log("Thats an interesting choice");
// } else {
//     console.log(`I have never heard of ${favoriteAnimal}`);
// }


// change if statements to switch statement

switch (favoriteAnimal) {
    case "jaguar":
    case "bobcat":
    case "cat": 
        console.log("Cats are great");
        break;
    
    case "dog": 
        console.log("Dogs are kinda loud");
        break;
    
    case "shark": 
        console.log("Thats an interesting choice");
        break;
    default:
        console.log(`I have never heard of ${favoriteAnimal}`);
}
