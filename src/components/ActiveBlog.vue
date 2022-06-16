<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-light text-center">
        <h3>{{ activeBlog.title }}</h3>
        <img class="img-fluid w-50" :src="activeBlog.imgUrl" alt="" />
        <p style="font-size: x-large">{{ activeBlog.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      activeBlog: computed(() => AppState.activeBlog),
    };
  },
};
</script>

<style>
</style>