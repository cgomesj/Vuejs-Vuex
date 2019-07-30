<template>
  <div class="col">
    <label for="informNewValue"
      >This is the value of $store.state.value: {{ value }}</label
    >
    <div class="input-group my-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="informNewValueText"
          >Inform new value</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        id="informNewValue"
        aria-describedby="informNewValueText"
        v-model="value"
      />
    </div>
  </div>
</template>

<script>
import * as types from "../store/types.js";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch(types.UPDATE_VALUE, value);
      }
    }
  }
};
</script>

<style scoped></style>
