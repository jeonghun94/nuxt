<template>
  <div
    class="flex justify-between px-3 py-1 rounded-md items-center bg-indigo-200"
  >
    <p class="font-bold text-lg flex items-center gap-1">
      {{ title }}
      <span v-if="subTitle" class="text-sm">{{ subTitle }}</span>
    </p>
    <div>
      <button>
        <Icon name="ic:outline-close" class="text-lg" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>
