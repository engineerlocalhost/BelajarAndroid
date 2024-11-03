<template>
  <div id="app">
    <h1>Menampilkan Nilai 1 sampai 50</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nilai</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(number, index) in numbers" :key="number">
          <td>{{ index + 1 }}</td> <!-- Tampilkan nomor urut -->
          <td>{{ number }}</td>   <!-- Tampilkan nilai dari 1 sampai 50 -->
          <td></td>               <!-- Keterangan -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Inisiai array numbers dengan nilai dari 1 sampai 50
      numbers: Array.from({ length: 50 }, (_, i) => i + 1),
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
}

table {
  margin: 0 auto; 
  border-collapse: collapse; 
  width: 50%;
}

th, td {
  border: 1px solid #dddddd;
  text-align: center; 
  padding: 8px; 
}

th {
  background-color: #ff5722; 
  color: white; 
}

tr:nth-child(even) {
  background-color: #f2f2f2; 
}

tr:nth-child(odd) {
  background-color: #fff; 
}

tr:hover {
  background-color: #e0e0e0;
}
</style>
