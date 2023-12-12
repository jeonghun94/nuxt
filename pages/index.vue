<template>
  <!-- <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <img src="/favicon.ico" alt="favicon" />
    <img src="~/assets/img/8.png" alt="img" /> -->

  <StudentLoginForm v-if="isStudnet" />
  <TeacherLoginForm v-if="!isStudnet" />
</template>
<script setup lang="ts">
import "~/assets/css/style.css";

const isStudnet = ref(false);

onMounted(() => {
  const locationOrigin = window?.location?.origin;
  isStudnet.value = locationOrigin.includes("localhost");
  const io = useIO();
  const socket = io("ws://localhost:4000", {
    transports: ["websocket"],
  });
  socket.emit("enter_room", { payload: "dd" }, () => {
    console.log("server is done!");
  });
});
</script>
