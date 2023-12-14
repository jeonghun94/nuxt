<template>
  <div class="flex w-full min-h-[calc(100vh-51px)]">
    <div class="flex-col gap-2 p-2 flex w-10/12 border">
      <TabMenuHeader
        v-for="(tab, idx) in tabMenu"
        :key="idx"
        :title="tab.title"
        :subTitle="tab.subTitle"
      />
    </div>

    <RNB class="w-2/12" @click="handleStart" />
  </div>

  <div
    v-if="isReady"
    class="fixed top-1/2 left-1/2 w-auto p-5 h-auto flex flex-col justify-center items-center gap-5 border border-black rounded-2xl transform -translate-x-1/2 -translate-y-1/2"
  >
    <div class="flex flex-col items-center font-semibold">
      <p>지금 바로 오늘의 수업이 시작됩니다.</p>
      <p>
        <span class="text-red-500">{{ count }}초</span> 후에 자동 이동합니다.
      </p>
    </div>
    <button
      @click="handlCountZero"
      class="bg-black text-white rounded-2xl px-5 py-1"
    >
      오늘의 수업 바로 가기
    </button>
  </div>

  <LoadingSpinner v-if="loading" />
</template>

<script setup lang="ts">
import useTabMenuStore from "@/stores/tabMenu";
const store = useTabMenuStore();
const tabMenu = computed(() => store.tabMenu);
const isReady = ref(false);
const count = ref(10);
const loading = ref(false);

const handlCountZero = () => {
  count.value = 0;
};

const handleStart = () => {
  isReady.value = true;
  setInterval(() => {
    count.value -= 1;

    if (count.value <= 0) {
      isReady.value = false;
      loading.value = true;
    }
  }, 1000);
};

definePageMeta({
  layout: "main-layout",
});
</script>
