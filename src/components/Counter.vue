<template>
  <div class="card my-3">
    <div class="card-header">Perfom Store Mutations</div>

    <div class="card-body">
      <div class="form-group">
        <label class="form-label mr-3">decrement by 50</label>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="decrement(50)"
        >
          -
        </button>
      </div>

      <div class="form-group">
        <label class="form-label mr-3">increment by 100</label>

        <button
          type="button"
          class="btn btn-outline-success"
          @click="increment(100)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style scoped>
div.button-group button {
  width: 35px;
  height: 35px;
}
</style>
