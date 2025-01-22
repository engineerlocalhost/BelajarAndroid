<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crypto Prices</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Tombol Refresh -->
      <div class="button-container">
        <ion-button @click="fetchData" class="custom-button">
          Refresh
        </ion-button>
      </div>

      <!-- Tabel Data -->
      <div class="table-container">
        <table>
          <tbody>
            <tr v-for="(crypto, index) in paginatedData" :key="crypto.id">
              <td>
                <strong>Rank</strong>
                <div>{{ crypto.rank }}</div>
              </td>
              <td>
                <strong>Bitcoin</strong>
                <div>{{ crypto.symbol }}</div>
              </td>
              <td>
                <strong>USD</strong>
                <div>{{ parseFloat(crypto.price_usd).toFixed(2) }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Navigasi Halaman -->
      <div class="pagination-container">
        <ion-button @click="prevPage" :disabled="currentPage === 1">
          Previous
        </ion-button>
        <ion-button @click="nextPage" :disabled="currentPage * itemsPerPage >= cryptocurrencies.length">
          Next
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cryptocurrencies: [], // Data dari API
      currentPage: 1, // Halaman awal
      itemsPerPage: 7 // Tampilkan 5 data per halaman
    };
  },
  computed: {
    // Mendapatkan data untuk halaman saat ini
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.cryptocurrencies.slice(start, end);
    }
  },
  methods: {
    // Mengambil data dari API
    async fetchData() {
      try {
        const response = await axios.get("https://api.coinlore.net/api/tickers/");
        this.cryptocurrencies = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    // Navigasi ke halaman berikutnya
    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.cryptocurrencies.length) {
        this.currentPage++;
      }
    },

    // Navigasi ke halaman sebelumnya
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  mounted() {
    // Memuat data secara otomatis saat aplikasi dibuka
    this.fetchData();
  }
};
</script>

<style scoped>
/* Gaya untuk Tombol */
.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.custom-button {
  padding: 8px 16px;
  --background: #428cff;
  --color: white;
  --min-width: auto; /* Lebar tombol mengikuti panjang teks */
}

.custom-button:focus {
  --background: #3577cc; /* Warna saat tombol difokuskan */
}

/* Gaya untuk Tabel */
.table-container {
  margin: 16px auto;
  max-width: 600px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 16px;
  background-color: #fff2cc; /* Warna latar tabel */
}

td {
  border: 1px solid #e6cd85; /* Warna border tabel */
  padding: 8px;
  font-size: 14px;
  color: #333; /* Warna teks */
}

strong {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #000; /* Warna header kolom */
}

div {
  font-size: 14px;
  color: #333; /* Warna teks data */
}

tr:nth-child(even) {
  background-color: #fff6d6; /* Warna untuk baris genap */
}

/* Gaya untuk Navigasi */
.pagination-container {
  display: flex;
  justify-content: center;
}

.pagination-container ion-button {
  margin: 0 5px;
}
</style>
