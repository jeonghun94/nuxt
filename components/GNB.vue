<template>
  <div class="w-full min-h-[calc(100vh-51px)] p-5 flex flex-col gap-8">
    <button
      class="p-3 bg-gray-600 rounded-[5px] text-white w-full text-sm py-2 flex items-center justify-center gap-3"
    >
      수업 대기
      <div
        class="h-12 w-12 rounded-full bg-white flex items-center justify-center"
      >
        <Icon name="ic:outline-rocket-launch" class="h-8 w-8 text-gray-500" />
      </div>
    </button>

    <div
      v-for="section in sections"
      :key="section.title"
      class="flex flex-col gap-1 fle col-span-8 text-sm font-semibold"
    >
      <h1
        v-for="item in section.items"
        :key="item.name"
        :class="section.className"
      >
        <Icon :name="item.icon" class="text-lg" />
        {{ item.name }}
      </h1>
    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Section 1",
    className:
      "border border-gray-500 rounded-[5px] p-2 flex items-center gap-1",
    items: [
      { name: "진도 학습", icon: "ic:sharp-menu-book" },
      { name: "수업 자료실", icon: "ic:outline-library-books" },
      { name: "수학 익힘 문제", icon: "ic:twotone-sticky-note-2" },
    ],
  },
  {
    title: "Section 2",
    className: "border-b border-gray-300 p-2 flex items-center gap-1",
    items: [
      { name: "수업 활동 도구", icon: "ic:outline-color-lens" },
      { name: "누리집 연동", icon: "ic:outline-sports-volleyball" },
      { name: "콘텐츠 연동", icon: "ic:outline-swap-horizontal-circle" },
      { name: "화이트 보드", icon: "ic:outline-aspect-ratio" },
    ],
  },
  {
    title: "Section 3",
    className: "bg-gray-100 py-3 px-2 flex items-center gap-1 rounded-md",
    items: [
      { name: "화면 가리기", icon: "ic:twotone-stop-screen-share" },
      { name: "모니터링", icon: "ic:baseline-monitor" },
      { name: "기능단추 작게", icon: "ic:baseline-format-list-bulleted" },
      { name: "확대 축소", icon: "ic:outline-plus-minus-alt" },
    ],
  },
];
</script>
