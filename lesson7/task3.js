function divide(numerator, denominator) {
    if (typeof numerator != "number" || typeof denominator != "number" || denominator === 0) {
        throw new Error("Incorrect data entered!");
    } else {
        return numerator / denominator;
    }
}

try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error("An error occurred.", error.message);
} finally {
    console.log("Work completed.");
}

try {
    const result = divide("apple", 2);
    console.log(result);
} catch (error) {
    console.error("An error occurred.", error.message);
} finally {
    console.log("Work completed.");
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("An error occurred.", error.message);
} finally {
    console.log("Work completed.");
}