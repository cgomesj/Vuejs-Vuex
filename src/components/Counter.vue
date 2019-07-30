<template>
  <div class="card my-3">
    <div class="card-header">Perfom Store Mutations</div>

    <div class="card-body">
      <div class="form-group">
        <label class="form-label mr-3">decrement by 1</label>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="decrement(1)"
        >
          -
        </button>
      </div>

      <div class="form-group">
        <label class="form-label mr-3">increment by 2</label>

        <button
          type="button"
          class="btn btn-outline-success"
          @click="increment(2)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as types from "../store/types.js";

export default {
  methods: {
    ...mapMutations({
      increment: types.MUTATE_INCREMENT_COUNTER,
      decrement: types.MUTATE_DECREMENT_COUNTER
    })
  }
};
</script>

<style scoped>
div.button-group button {
  width: 35px;
  height: 35px;
}
</style>
