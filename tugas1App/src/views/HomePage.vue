<style scoped>
  .example-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 16px;
  }
  .profile-name {
    font-size: 24px;
    font-weight: bold;
  }
  .profile-description {
    font-size: 16px;
    color: gray;
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="#">
        <img src="#" alt="Profile Picture" class="profile-image" />
        <div class="#">Nama Anda</div>
        <div class="#">Deskripsi singkat tentang diri Anda.</div>
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
