function printNumber(num) {
    if (num <= 0) {
        return 0;
    } else {
        console.log(num);
        return printNumber(num - 1);
    }
}

printNumber(5);
