<template>
  <div class="my-3">
    <h4>Result II</h4>
    <p>Double of counter is: {{ doubleCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";

export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER
    })
  }
};
</script>
