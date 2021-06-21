<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script>
import { wrap } from "comlink";
import Abc from "./services/abc";

export default {
  async mounted() {
    const abc = new Abc();
    console.log(await abc.action());
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>