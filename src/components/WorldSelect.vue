<template>
  <Dropdown
    v-model="current"
    :options="worlds"
    optionLabel="label"
    optionValue="id"
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
import { defineComponent, ref, watch } from "vue";
import Dropdown from "primevue/dropdown";
import { WORLD_OPTIONS, R_WORLD } from "../constants";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  components: { Dropdown },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const current = ref(null);
    const worlds = ref(WORLD_OPTIONS);

    watch(current, (newVal) => {
      if (newVal) {
        router.push({ name: R_WORLD, params: { worldId: newVal } });
      }
    });
    watch(route, (newRoute) => {
      const worldId = newRoute.params?.worldId || null;
      current.value = worldId ? parseInt(worldId, 10) : null;
    });

    return { current, worlds };
  },
});
</script>
