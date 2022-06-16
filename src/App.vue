<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <Modal id="blog-modal">
    <template #header> Blog details </template>
    <template #body>
      <ActiveBlog />
    </template>
  </Modal>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import ActiveBlog from "./components/ActiveBlog.vue";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { ActiveBlog },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
