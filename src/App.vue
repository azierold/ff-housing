<template>
  <Dropdown
    v-model="current"
    :options="worlds"
    optionLabel="label"
    optionGroupLabel="label"
    optionGroupChildren="items"
    :filter="true"
    placeholder="Select World"
  >
    <template #optiongroup="slotProps">
      <div class="option-wrap">
        <span :class="['fi', 'fi-' + slotProps.option.iso]"></span>
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Dropdown>
</template>

<script>
import { defineComponent, ref } from "vue";
import Dropdown from "primevue/dropdown";
import { WORLD_OPTIONS } from "./config";

export default defineComponent({
  components: { Dropdown },
  setup() {
    const current = ref(null);
    const worlds = ref(WORLD_OPTIONS);

    return { current, worlds };
  },
});
</script>

<style lang="scss">
@import "~primevue/resources/primevue.css";
@import "~primeflex/primeflex.scss";
@import "~primeicons/primeicons.css";
@import "~primevue/resources/themes/vela-blue/theme.css";
@import "./assets/flags.scss";
@import "./assets/main.scss";
</style>