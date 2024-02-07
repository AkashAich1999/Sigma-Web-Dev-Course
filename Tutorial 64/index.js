/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/


let first, second, third;
// (0 to 0.33), (0.33 to 0.66), (0.66 to 1)

// Let's generate the first word.
let rand = Math.random();
if(rand < 0.33){
    first = "Crazy";
} else if(rand >= 0.33 && 0.66){
    first = "Amazing";
} else {
    first = "Fire";
}

// Let's generate the second word.
rand = Math.random();
if(rand < 0.33){
    second = "Engine";
} else if(rand >= 0.33 && 0.66){
    second = "Foods";
} else {
    second = "Garments";
}

// Let's generate the third word.
rand = Math.random();
if(rand < 0.33){
    third = "Bros";
} else if(rand >= 0.33 && 0.66){
    third = "Limited";
} else {
    third = "Hub";
}

console.log(`${first}-${second}-${third}`);