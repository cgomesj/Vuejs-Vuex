<template>
  <div class="my-3">
    <h4>Result II</h4>
    <p>Double of counter is: {{ doubleCounter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>
