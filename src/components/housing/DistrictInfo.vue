<template>
  <div>
    <div>{{ district.name }}</div>
    <div>Open Plots: {{ district.num_open_plots }}</div>
    <div>Last Update: {{ formatDate(district.oldest_plot_time * 1000) }}</div>
    <hr />
  </div>
</template>

<script>
import { defineComponent } from "vue";

const dateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "shortOffset"
};
const dateFormatter = new Intl.DateTimeFormat("de-DE", dateOptions);

export default defineComponent({
  props: {
    district: { type: Object, required: true },
  },
  setup() {
    const formatDate = (input) => {
      return dateFormatter.format(input);
    };

    return { formatDate };
  },
});
</script>