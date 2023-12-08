<template>
  <div>
    <h1>Welcome to the post pasge id is {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
definePageMeta({ middleware: ["posts"] });

const route = useRoute();
const id = route.params.id;
</script>
