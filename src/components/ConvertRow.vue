<template>
  <div class="convert-row">
    <div>
      <label for="">Decimal: (0...9)</label>
      <InputText v-model="dec" @input="onChange('dec')" />
    </div>
    <div>
      <label for="">Binary: (0, 1)</label>
      <InputText v-model="binary" @input="onChange('bin')" />
    </div>
    <div>
      <label for="">Octal: (0...7)</label>
      <InputText v-model="octal" @input="onChange('octal')" />
    </div>
    <div>
      <label for="">Hex: (0...9, A...F)</label>
      <InputText v-model="hex" @input="onChange('hex')" />
    </div>
    <div v-if="false">
      <Button
        class="p-button p-button-danger"
        icon="pi pi-trash"
        @click="onDeleteClicked()"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import convertHelper from "@/convertHelper.js";

export default {
  name: "ConvertRow",
  props: {
    rowId: Number,
    onDeleteClicked: Function,
  },
  setup() {
    const binary = ref("0");
    const octal = ref("0");
    const dec = ref("0");
    const hex = ref("0");

    const onChange = (src) => {
      switch (src) {
        case "bin":
          octal.value = convertHelper.convertBinaryToOctal(binary.value);
          dec.value = convertHelper.convertBinaryToDec(binary.value);
          hex.value = convertHelper.convertBinaryToHex(binary.value);
          break;
        case "dec":
          binary.value = convertHelper.convertDecToBinary(dec.value);
          octal.value = convertHelper.convertBinaryToOctal(binary.value);
          hex.value = convertHelper.convertBinaryToHex(binary.value);
          break;
        case "octal":
          binary.value = convertHelper.convertOctalToBinary(octal.value);
          dec.value = convertHelper.convertBinaryToDec(binary.value);
          hex.value = convertHelper.convertBinaryToHex(binary.value);
          break;
        case "hex":
          binary.value = convertHelper.convertHexToBinary(hex.value);
          octal.value = convertHelper.convertBinaryToOctal(binary.value);
          dec.value = convertHelper.convertBinaryToDec(binary.value);
          break;
      }
    };
    return {
      binary,
      octal,
      dec,
      hex,
      onChange,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.convert-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 10px 5px;
  border: #ccc 1px solid;
  margin: 20px 0px;
  gap: 5px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
}

label {
  display: block;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.p-inputtext {
  width: 100%;
}
</style>
