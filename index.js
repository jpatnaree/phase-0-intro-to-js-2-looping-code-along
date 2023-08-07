// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
// }
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


 
function writeCards(name, events) {
    let messages = [];
    for  (let  i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
        
    }
    return messages;
}



function countDown(number) {
    
    while (number >= 0) {
        console.log(number--);
    }
}
// let countDown;

// function count(countDown) {
//     for (countDown = 0; countDown > 10; countDown--) {
//         console.log(countDown);
//     }
// }

