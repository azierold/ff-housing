<template>
  <WorldInfo :world="world" />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import WorldInfo from "../components/housing/WorldInfo.vue";

const API_URL = "https://paissadb.zhu.codes/worlds/36";

export default defineComponent({
  components: { WorldInfo },
  setup() {
    const world = ref({});

    onMounted(async () => {
      const response = await fetch(API_URL);
      world.value = await response.json();
    });

    return { world };
  },
});
</script>
