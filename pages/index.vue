<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <img src="/favicon.ico" alt="favicon" />
    <img src="~/assets/img/8.png" alt="img" />
  </div>
</template>
<script setup>
import "~/assets/css/style.css";

onMounted(() => {
  const io = useIO();
  const socket = io("ws://localhost:3000", {
    transports: ["websocket"],
  });
  socket.emit("enter_room", { payload: "dd" }, () => {
    console.log("server is done!");
  });
});
</script>
