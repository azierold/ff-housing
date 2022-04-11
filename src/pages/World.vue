<template>
  <WorldInfo :world="world" />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import WorldInfo from "../components/housing/WorldInfo.vue";

const API_URL = "https://paissadb.zhu.codes/worlds";

export default defineComponent({
  components: { WorldInfo },
  setup() {
    const route = useRoute();

    const world = ref({});
    const loading = ref(true);

    const fetchData = async (worldId) => {
      const res = await fetch(`${API_URL}/${worldId}`);
      return await res.json();
    };

    const updateData = async (worldId) => {
      loading.value = true;
      world.value = await fetchData(worldId);
      loading.value = false;
    };

    onMounted(async () => {
      await updateData(route.params.worldId);
    });

    onBeforeRouteUpdate(async (to, from) => {
      if (to.params.worldId !== from.params.worldId) {
        await updateData(to.params.worldId);
      }
    });

    return { world };
  },
});
</script>
