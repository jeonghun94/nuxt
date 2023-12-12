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

    <GNB class="w-2/12" />
  </div>

  <div
    class="fixed top-1/2 left-1/2 w-auto p-5 h-auto flex flex-col justify-center items-center gap-5 border border-black rounded-2xl transform -translate-x-1/2 -translate-y-1/2"
  >
    <div class="flex flex-col items-center font-semibold">
      <p>지금 바로 오늘의 수업이 시작됩니다.</p>
      <p><span class="text-red-500">10초</span> 후에 자동 이동합니다.</p>
    </div>
    <button class="bg-black text-white rounded-2xl px-5 py-1">
      오늘의 수업 바로 가기
    </button>
  </div>

  <LoadingSpinner />
</template>

<script setup lang="ts">
const tabMenu = ref([
  { title: "페이지명", subTitle: "페이지 세부내용" },
  { title: "페이지명2", subTitle: "페이지 세부내용2" },
]);

definePageMeta({
  layout: "main-layout",
});
</script>
