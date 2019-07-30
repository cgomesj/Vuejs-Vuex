<template>
  <div class="home container my-3">
    <div class="row">
      <div class="col-12">
        <h1>Vuex</h1>
      </div>
      <div class="col-sm-12 col-lg-6 mx-auto">
        <component :is="'app-result'" />
        <component :is="'app-result-2'" />
        <component :is="'app-counter'" />
        <component :is="'app-counter-2'" />
      </div>
      <div class="col-sm-12 col-lg-6 mx-auto">
        <component :is="'app-store-value'" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import Counter2 from "@/components/Counter2.vue";
import Result from "@/components/Result.vue";
import Result2 from "@/components/Result2.vue";
import StoreValue from "@/components/StoreValue.vue";

export default {
  name: "home",

  components: {
    "app-counter": Counter,
    "app-counter-2": Counter2,
    "app-result": Result,
    "app-result-2": Result2,
    "app-store-value": StoreValue
  }
};
</script>
