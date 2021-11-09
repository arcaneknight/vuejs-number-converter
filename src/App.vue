<template>
  <div>
    <ConvertRow
      v-for="rowid in rows"
      :key="rowid"
      :rowId="rowid"
      :onDeleteClicked="() => deleteRow(rowid)"
    />
    <div class="add-area">
      <Button
        class="p-button p-button-success"
        label="Add Row"
        @click="addRow"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ConvertRow from "./components/ConvertRow.vue";

export default {
  name: "App",
  components: {
    ConvertRow,
  },
  setup() {
    let rowId = 1;
    const rows = ref([rowId]);

    const addRow = () => {
      rows.value = [...rows.value, ++rowId];
    };

    const deleteRow = (id) => {
      rows.value = rows.value.filter((x) => x !== id);
    };

    return {
      rows,
      addRow,
      deleteRow,
    };
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.add-area {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
