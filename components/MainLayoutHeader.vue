<template>
  <header>
    <nav class="w-full px-5 py-3 text-white bg-blue-950 border-b">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <h1 class="font-semibold">초등 3학년 1학기</h1>
          <h2
            class="text-sm font-semibold text-gray-200 flex items-center gap-1"
          >
            <Icon name="subway:admin" />조정훈 선생님
          </h2>
          <button
            class="border text-sm text-gray-400 border-gray-400 px-2 rounded-3xl"
          >
            로그아웃
          </button>
        </div>

        <ul
          class="flex justify-between items-center gap-7 text-sm font-semibold"
        >
          <li v-for="item in visibleMenuItems" :key="item.name">
            <NuxtLink :to="item.link" class="flex items-center gap-2">
              <Icon :name="item.icon" class="text-lg" />
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const menuItems = ref([
  {
    name: "notebook",
    icon: "icon-park-outline:notebook",
    text: "오늘의 수업",
    link: "/",
    isVisible: true,
  },
  {
    name: "chart",
    icon: "icon-park-outline:chart-histogram",
    text: "학습 결과",
    link: "/",
    isVisible: true,
  },
  {
    name: "calculator",
    icon: "icon-park-outline:calculator",
    text: "과제 관리",
    link: "/",
    isVisible: true,
  },
  {
    name: "add-web",
    icon: "icon-park-outline:add-web",
    text: "수업 준비실",
    link: "/",
    isVisible: true,
  },
  {
    name: "setting",
    icon: "icon-park-outline:setting-two",
    text: "설정",
    link: "/",
    isVisible: true,
  },
]);

const visibleMenuItems = computed(() => {
  return menuItems.value.filter((item) => item.isVisible);
});
</script>
