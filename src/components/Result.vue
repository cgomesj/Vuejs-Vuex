<template>
  <div class="my-3">
    <h4>Result I</h4>
    <ul class="list-group">
      <li class="list-group-item bg-primary text-light">
        Counter itself with smile face: {{ resultStringCounter }}
      </li>
      <li class="list-group-item bg-success text-light">
        Double of store.state.counter: {{ resultDoubleCounter }}
      </li>
      <li class="list-group-item bg-warning text-light">
        Inside computed value: {{ justSomeText }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";

export default {
  computed: {
    ...mapGetters({
      resultDoubleCounter: types.DOUBLE_COUNTER,
      resultStringCounter: types.STRING_COUNTER
    }),

    justSomeText() {
      return "Just some text";
    }
  }
};
</script>
