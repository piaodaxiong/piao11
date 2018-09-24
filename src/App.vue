<template>
  <div id="app">
    <Daohang1 />
    <Daohang2 />
    <Daohang3/>
    <Dibu />
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
  import Daohang3 from "./components/daohang/Daohang3";
  import Daohang1 from "./components/daohang/Daohang1";
  import Daohang2 from "./components/daohang/Daohang2";
  import Dibu from "./components/dibu/Dibu";

  export default {
    name: "App",
    components: {
      Daohang1,
      Daohang2,
      Daohang3,
      Dibu
    }
  };
</script>

<style>

</style>