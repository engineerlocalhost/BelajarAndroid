<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="button-container">
        <ion-button @click="fetchData" class="custom-button">
          Get Data
        </ion-button>
      </div>

      <ion-grid>
        <ion-row class="header-row">
          <ion-col class="header-col">Name</ion-col>
          <ion-col class="header-col">Symbol</ion-col>
          <ion-col class="header-col">Harga USD</ion-col>
        </ion-row>

        <ion-row v-for="crypto in paginatedData" :key="crypto.id" class="data-row">
          <ion-col>{{ crypto.name }}</ion-col>
          <ion-col>{{ crypto.symbol }}</ion-col>
          <ion-col>{{ crypto.price_usd }}</ion-col>
        </ion-row>
      </ion-grid>

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
import axios from 'axios';

export default {
  data() {
    return {
      cryptocurrencies: [], // seluruh data
      currentPage: 1, // page pertama
      itemsPerPage: 5 // hanya menampilkan 5 data per halaman
    };
  },
  computed: {
    // Get the data
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.cryptocurrencies.slice(start, end);
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://api.coinlore.net/api/tickers/'); //masukan link API disini!!
        this.cryptocurrencies = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    nextPage() {
      if (this.currentPage * this.itemsPerPage < this.cryptocurrencies.length) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style scoped>
  ion-col {
    font-weight: normal;
    text-align: center;
  }

  ion-button {
    margin-bottom: 16px;
    --background: #428cff;
    --color: white;
  }

  .custom-button {
    --width: auto; 
    padding: 8px 16px; 
  }

  ion-button:focus {
    --background: #3577cc; 
  }

 
  .button-container {
    display: flex;
    justify-content: center; 
    margin-bottom: 10px; 
  }


  .header-row {
    margin-bottom: 10px;
    border: 2px solid black; 
  }

  .header-col {
    text-align: center;
    padding: 10px;
  }

  /* Style list items */
  .data-row {
    margin-bottom: 10px;
  }

  .data-row ion-col {
    text-align: center; 
    padding: 8px 0;
  }


  .pagination-container {
    display: flex;
    justify-content: center; 
    margin-top: 10px; 
  }

  .pagination-container ion-button {
    margin: 0 10px; 
  }
</style>
