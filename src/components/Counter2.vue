<template>
  <div class="card my-3">
    <div class="card-header">Perfom Store Actions</div>
    <div class="card-body">
      <div class="form-group">
        <label class="form-label mr-3">decrement by 5 in 1,5 second</label>
        <button
          type="button"
          class="btn btn-danger mr-2"
          @click="asyncDecrement({ value: 5, duration: 1500 })"
        >
          -
        </button>
      </div>

      <div class="form-group">
        <label class="form-label mr-3">increment by 3 in 1,5 second</label>

        <button
          type="button"
          class="btn btn-success"
          @click="asyncIncrement({ value: 3, duration: 1500 })"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "../store/types.js";

export default {
  methods: {
    ...mapActions({
      asyncIncrement: types.INCREMENT_COUNTER_ASYNC,
      asyncDecrement: types.DECREMENT_COUNTER_ASYNC
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
