<style scoped>
  .example-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    text-align: center;
  }

  .profile-card {
    #background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
  }

  .profile-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .profile-item {
    font-size: 18px;
    margin: 5px 0;
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">
        <div class="profile-card">
          <div class="profile-name">RIKY</div>
          <div class="profile-item">NIM: 121233</div>
          <div class="profile-item">Prodi: WAWDAW</div>
          <div class="profile-item">UPBJJ: AASF</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

  export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  };
</script>
