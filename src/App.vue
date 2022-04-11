<template>
  <div class="wrap">
    <h1>Simple Housing Check</h1>
    <WorldSelect />
    <div class="content-wrap">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import WorldSelect from "./components/WorldSelect";

export default defineComponent({
  components: { WorldSelect },
});
</script>

<style lang="scss">
@import "./assets/main";
</style>