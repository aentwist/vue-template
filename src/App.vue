<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TheAppBar from "./components/TheAppBar.vue";
</script>
