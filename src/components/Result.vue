<template>
  <div class="my-3">
    <h4>Result I</h4>
    <ul class="list-group">
      <li class="list-group-item active">
        Counter itself with smile face: {{ resultStringCounter }}
      </li>
      <li class="list-group-item disabled">
        Double of store.state.counter: {{ resultDoubleCounter }}
      </li>
      <li class="list-group-item disabled">
        Inside computed value: {{ justSomeText }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      resultDoubleCounter: "doubleCounter",
      resultStringCounter: "stringCounter"
    }),

    justSomeText() {
      return "Just some text";
    }
  }
};
</script>
