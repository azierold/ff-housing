<template>
<div>
  <div>{{ district.name }}</div>
  <div>{{ district.num_open_plots }}</div>
  <div>{{ district.oldest_plot_time }}</div>
  <hr>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    district: { type: Object, required: true },
  },
  setup() {
    return {};
  },
});
</script>