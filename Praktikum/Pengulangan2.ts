function displayNumbers(nim: string): void {
    // Ambil  2 digit terakhir dari NIM
    const lastTwoDigits = parseInt(nim.slice(-2));
    const lastDigit = lastTwoDigits % 10; // Ambil digit terakhir
    let startValue = lastTwoDigits; // Menentukan nilai awal perulangan

    // MGenap atua ganjil berdasarkan NIM
    if (lastDigit % 2 === 0) { // Genap
        let count = startValue; // Inisialisasi variabel untuk do...while loop
        do {
            console.log(count);
            count++;
        } while (count <= 20);
    } else { // Ganjil
        let count = startValue; // Inisialisasi variabel untuk while loop
        while (count <= 20) {
            console.log(count);
            count++;
        }
    }
}

// Uji COba
const nim = "043263751"; // Masukan NIM kamu.
displayNumbers(nim);
