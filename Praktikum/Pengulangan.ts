function generatePattern(limit: number): void {
    let start = 1; // Memulai dari 1
    let isOdd = true; // Tandai  ganjil atau genap
    let perulangan = 1;
  
    // Loop utama sdg batas
    while (start < limit) {
      console.log(`Perulangan 10 ke-${perulangan}:`);
      
      let sum = 0;
      let count = 0;
  

      for (let i = 0; i < 5; i++) {
        if (start >= limit) break;
  
        console.log(start);
        sum += start;
        count++;
  

        start += 2;
      }
  
      console.log("--------------------------");
      console.log(`Jumlah: ${sum}`);
      console.log("");
  

      if (count === 5) {
        perulangan++;
        isOdd = !isOdd;
  
        start += isOdd ? 2 : 1;
      }
    }
  }
  
  generatePattern(100);
  