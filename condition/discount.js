/*
 * Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.
 */

let isMember = true;
let cart = 3000;

if ((cart > 1000) && (isMember)) {
    let discount = (cart/100)*20;
    let final = cart - discount;
    console.log("final amout to pay", final);
} else if ((cart > 1000) && (!isMember)) {
    let discount = (cart/100)*10;
    let final = cart - discount;
    console.log("final amout to pay", final);
} else {
    console.log("final amout to pay", cart);
}