function countCharacters(input) {
    const sanitizedInput = input.replace(/\s+/g, '').toUpperCase();
    const counts = {};
    const order = [];

    for (const char of sanitizedInput) {
        if (!counts[char]) {
            counts[char] = 0;
            order.push(char); 
        }
        counts[char]++;
    }

    for (const char of order) {
        console.log(`${char}-${counts[char]}`);
    }
}

countCharacters("Amolya Sharma");
