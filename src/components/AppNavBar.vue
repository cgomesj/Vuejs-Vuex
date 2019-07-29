<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav">
    <div class="navbar-brand">Vuejs-Vuex</div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navBarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default { name: "AppNavBar" };
</script>

<style scoped></style>
