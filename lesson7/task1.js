function handleNum(number, callback1, callback2) {
    if (number % 2 === 0) {
        callback1();
    } else {
        callback2();
    }
}

function handleEven() {
    console.log("Number is even.")
}

function handleOdd() {
    console.log("Number is odd.")
}

handleNum(12, handleEven, handleOdd);
handleNum(11, handleEven, handleOdd);