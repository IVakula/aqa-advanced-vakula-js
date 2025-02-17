function checkOrder(available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don't have enough goods.\n");
    } else if (ordered == 0) {
        console.log("Your order is empty.\n");
    } else {
        console.log("Your order is accepted.\n");
    }
}

let available1 = 10;
let ordered1 = 20;
console.log(`You ordered ${ordered1} items. Available ${available1} items.`)
checkOrder(available1, ordered1);

let available2 = 12;
let ordered2 = 0;
console.log(`You ordered ${ordered2} items. Available ${available2} items.`);
checkOrder(available2, ordered2);

let available3 = 40;
let ordered3 = 20;
console.log(`You ordered ${ordered3} items. Available ${available3} items.`);
checkOrder(available3, ordered3);