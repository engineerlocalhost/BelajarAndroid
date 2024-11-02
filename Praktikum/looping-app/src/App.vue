<template>
  <div id="app">
    <h1>Menampilkan Nilai 1 sampai 50</h1>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Menginisialisasi array numbers dengan nilai dari 1 sampai 50
      numbers: Array.from({ length: 50 }, (_, i) => i + 1),
    };
  },
};
</script>

<style>
/* Anda bisa menambahkan styling di sini jika diperlukan */
h1 {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
li {
  margin: 5px 0;
  font-size: 20px;
}
</style>
