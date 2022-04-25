<template>
  <div class="mb-5">
    <DataTable
      class="p-datatable-sm ff-table"
      stripedRows
      :value="district.open_plots"
      :paginator="true"
      :rows="10"
      :rowsPerPageOptions="[10, 25, 50]"
      v-model:filters="filterConfig"
      filterDisplay="menu"
      responsiveLayout="scroll"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    >
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <h2 class="m-0">
            {{ district.name }} ({{ district.num_open_plots }} Open)
          </h2>
        </div>
      </template>
      <template #empty>
        <div>No plots found</div>
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
      <Column
        field="size"
        header="Size"
        :sortable="true"
        :showFilterMatchModes="false"
      >
        <template #body="{ data }">
          <div>{{ formatSize(data.size) }}</div>
        </template>
        <template #filter="{ filterModel }">
          <Dropdown
            v-model="filterModel.value"
            :options="filterModel.options"
            optionLabel="label"
            optionValue="value"
          />
        </template>
      </Column>
      <Column field="price" header="Price" :sortable="true">
        <template #body="{ data }">
          <div>{{ data.price.toLocaleString() }}</div>
        </template>
      </Column>
      <Column
        field="purchase_system"
        header="Type"
        :sortable="true"
        :showFilterMatchModes="false"
      >
        <template #body="{ data }">
          <div>{{ formatType(data.purchase_system) }}</div>
        </template>
        <template #filter="{ filterModel }">
          <Dropdown
            v-model="filterModel.value"
            :options="filterModel.options"
            optionLabel="label"
            optionValue="value"
          />
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
import { defineComponent, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import { createDateTimeFormatter } from "../../util/format/FormatDate";

export default defineComponent({
  components: { DataTable, Column, Dropdown },
  props: {
    district: { type: Object, required: true },
  },
  setup() {
    const filterConfig = ref({
      size: {
        value: null,
        matchMode: FilterMatchMode.EQUALS,
        options: [
          { value: 0, label: "S" },
          { value: 1, label: "M" },
          { value: 2, label: "L" },
        ],
      },
      purchase_system: {
        value: null,
        matchMode: FilterMatchMode.EQUALS,
        options: [
          { value: 2, label: "FC (FFA)" },
          { value: 3, label: "FC (Lottery)" },
          { value: 4, label: "Personal (FFA)" },
          { value: 5, label: "Personal (Lottery)" },
        ],
      },
    });

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
      const isLottery = (1 & mask) > 0;
      const isFC = (2 & mask) > 0;
      const isPersonal = (4 & mask) > 0;

      const parts = [];
      isFC && parts.push("FC");
      isPersonal && parts.push("Personal");
      parts.push(isLottery ? "(Lottery)" : "(FFA)");

      return parts.join(" ");
    };

    return { filterConfig, formatDate, formatSize, formatType };
  },
});
</script>