<template>
  <div class="flex w-full min-h-[calc(100vh-51px)]">
    <div class="flex-col gap-3 p-2 flex w-11/12 10px border">
      <h1 class="border">title1</h1>
      <h1 class="border">title2</h1>
    </div>

    <GNB class="w-2/12 border" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});
</script>
