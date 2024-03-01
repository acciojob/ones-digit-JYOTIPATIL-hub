function onesDigit(number) {
    // Validate input: Check if the number is a positive integer
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
        throw new Error('Input must be a positive integer.');
    }

    // Extract the ones digit using modulo 10
    const ones = number % 10;
    return ones;
}

