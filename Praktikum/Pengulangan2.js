function displayNumbers(nim) {
    // Ambil  2 digit terakhir dari NIM
    var lastTwoDigits = parseInt(nim.slice(-2));
    var lastDigit = lastTwoDigits % 10; // Ambil digit terakhir
    var startValue = lastTwoDigits; // Menentukan nilai awal perulangan
    // MGenap atua ganjil berdasarkan NIM
    if (lastDigit % 2 === 0) { // Genap
        var count = startValue; // Inisialisasi variabel untuk do...while loop
        do {
            console.log(count);
            count++;
        } while (count <= 20);
    }
    else { // Ganjil
        var count = startValue; // Inisialisasi variabel untuk while loop
        while (count <= 20) {
            console.log(count);
            count++;
        }
    }
}
// Uji COba
var nim = "043263751"; // Masukan NIM kamu.
displayNumbers(nim);
