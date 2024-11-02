function displayNumbers(nim: string): void {
    const lastDigit = parseInt(nim[nim.length - 1], 10);
    const start = parseInt(nim.slice(-2), 10);
    
    if (lastDigit % 2 === 0) {
        // do..while loop genap
        let i = start;
        do {
            console.log(i);
            i++;
        } while (i <= start + 20);
    } else {
        // do..while loop Ganjil
        let i = start;
        while (i <= start + 20) {
            console.log(i);
            i++;
        }
    }
}

// Masukan  NIM kamu
displayNumbers('043263751');
