function generatePattern(limit: number): void {
    let start = 1; // dimulai dari angka 1
    let isOdd = true; // Tanda pola ganjil atau genap
    let perulangan = 1;
  
    // Loop ke-1 hingga
    while (start < limit) {
      console.log(`Perulangan 10 ke-${perulangan}:`);
      
      let sum = 0;
      let count = 0;
  
      // Sub-loop untuk menampilkan 5 angka dalam pola
      for (let i = 0; i < 5; i++) {
        if (start >= limit) break;
  
        // Tampilkan nilai dan tambahkan ke total
        console.log(start);
        sum += start;
        count++;
  
        // Loncat angka dengan 2 (untuk pola ganjil/genap)
        start += 2;
      }
  
      console.log("--------------------------");
      console.log(`Jumlah: ${sum}`);
      console.log("");
  
      // Setiap 10 perulangan, ganti antara ganjil dan genap
      if (count === 5) {
        perulangan++;
        isOdd = !isOdd; // Beralih antara ganjil dan genap
  
        // Jika perulangan ganjil, mulai dengan nilai genap berikutnya
        start += isOdd ? 2 : 1;
      }
    }
  }
  
  generatePattern(100);
  