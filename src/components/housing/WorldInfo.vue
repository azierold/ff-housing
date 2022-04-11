<template>
  <div>
    <div>{{ world.name }}</div>

    <div class="districts-wrap">
      <DistrictInfo
        v-for="row in districts"
        :key="row.id"
        :district="row"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import DistrictInfo from "./DistrictInfo.vue";

export default defineComponent({
  components: { DistrictInfo },
  props: {
    world: { type: Object, required: true },
  },
  setup(props) {
    const districts = computed(() => props.world?.districts);

    return { districts };
  },
});
</script>