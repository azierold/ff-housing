<template>
  <div class="mb-5">
    <DataTable
      class="p-datatable-sm"
      :value="district.open_plots"
      :paginator="true"
      :rows="10"
      :rowsPerPageOptions="[10, 25, 50]"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h2 class="m-0">
            {{ district.name }} ({{ district.num_open_plots }} Open)
          </h2>
          <div>
            <div>Last Update</div>
            <div>{{ formatDate(district.oldest_plot_time * 1000) }}</div>
          </div>
        </div>
      </template>
      <Column field="ward_number" header="Ward" :sortable="true">
        <template #body="{ data }">
          <div>{{ data.ward_number + 1 }}</div>
        </template>
      </Column>
      <Column field="plot_number" header="Plot" :sortable="true">
        <template #body="{ data }">
          <div>{{ data.plot_number + 1 }}</div>
        </template>
      </Column>
      <Column field="size" header="Size" :sortable="true">
        <template #body="{ data }">
          <div>{{ formatSize(data.size) }}</div>
        </template>
      </Column>
      <Column field="price" header="Price" :sortable="true">
        <template #body="{ data }">
          <div>{{ data.price.toLocaleString() }}</div>
        </template>
      </Column>
      <Column field="purchase_system" header="Type" :sortable="true">
        <template #body="{ data }">
          <div>{{ formatType(data.purchase_system) }}</div>
        </template>
      </Column>
      <Column field="last_updated_time" header="Updated" :sortable="true">
        <template #body="{ data }">
          <div>{{ formatDate(data.last_updated_time * 1000) }}</div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { createDateTimeFormatter } from "../../util/format/FormatDate";

export default defineComponent({
  components: { DataTable, Column },
  props: {
    district: { type: Object, required: true },
  },
  setup() {
    const formatDate = createDateTimeFormatter();
    const formatSize = (size) => {
      switch (size) {
        case 0:
          return "S";
        case 1:
          return "M";
        case 2:
          return "L";
      }
    };
    const formatType = (mask) => {
      const isLottery = (mask & (1 << 0)) > 0;
      const isFC = (mask & (1 << 1)) > 0;
      const isPersonal = (mask & (1 << 2)) > 0;

      let output = '';
      output += isFC ? 'FC' : '';
      output += isPersonal ? 'Personal' : '';
      output += isLottery ? ' (Lottery)' : ' (FFA)'

      return output;
    };

    return { formatDate, formatSize, formatType };
  },
});
</script>