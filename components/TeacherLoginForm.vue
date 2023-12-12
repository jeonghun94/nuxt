<template>
  <div class="w-full p-6 bg-white border rounded-md shadow-md h-atuo">
    <h1 class="mb-6 text-2xl font-semibold text-center">교사 로그인</h1>

    <form>
      <div class="mb-4">
        <input
          v-model="email"
          type="email"
          id="email"
          name="email"
          class="w-full p-2 mt-1 text-sm border rounded-md"
          placeholder="이메일을 입력해 주세요"
        />
      </div>

      <div class="mb-4">
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="w-full p-2 mt-1 text-sm border rounded-md"
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>

      <div class="mb-6">
        <button
          type="submit"
          class="w-full p-2 text-white bg-blue-500 rounded-md"
        >
          로그인
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
</script>
