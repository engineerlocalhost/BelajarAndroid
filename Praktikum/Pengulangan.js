function generatePattern(limit) {
    var start = 1; // Memulai dari 1
    var isOdd = true; // Tandai  ganjil atau genap
    var perulangan = 1;
    // Loop utama sdg batas
    while (start < limit) {
        console.log("Perulangan 10 ke-".concat(perulangan, ":"));
        var sum = 0;
        var count = 0;
        for (var i = 0; i < 5; i++) {
            if (start >= limit)
                break;
            console.log(start);
            sum += start;
            count++;
            start += 2;
        }
        console.log("--------------------------");
        console.log("Jumlah: ".concat(sum));
        console.log("");
        if (count === 5) {
            perulangan++;
            isOdd = !isOdd;
            start += isOdd ? 2 : 1;
        }
    }
}
generatePattern(100);
