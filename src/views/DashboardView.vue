<template>
  <h1>dashboard</h1>
  <v-btn
    :icon="mdiDotsVertical"
    color="primary"
    data-test="my-btn"
    @click="show = !show"
  />
  <section data-test="my-feedback">
    <template v-if="show">hello, world</template>
  </section>
</template>

<script setup lang="ts">
import { mdiDotsVertical } from "@mdi/js";
import { ref } from "vue";

const show = ref(false);
</script>
