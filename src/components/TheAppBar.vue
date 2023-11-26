<template>
  <v-app-bar>
    <template #append>
      <v-btn :icon="mdiThemeLightDark" @click="toggleDark()" />
      <v-btn :icon="mdiDotsVertical" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { mdiDotsVertical, mdiThemeLightDark } from "@mdi/js";
import { useDark, useToggle } from "@vueuse/core";
import { watchEffect } from "vue";
import { useTheme } from "vuetify";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const theme = useTheme();
watchEffect(() => (theme.global.name.value = isDark.value ? "dark" : "light"));
</script>
