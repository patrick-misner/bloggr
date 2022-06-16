<template>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="modelId"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content bg-transparent">
        <div class="modal-header">
          <slot name="header">
            <!-- HEader SLOT -->
          </slot>
          <button
            type="button"
            class="btn-close bg-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!-- Modal-body slot -->

            <!-- Modal body slot -->
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import { onBeforeUnmount } from "@vue/runtime-core";
export default {
  setup() {
    onBeforeUnmount(() => {
      Modal.getOrCreateInstance(document.getElementById("blog-modal").hide());
    });
    return {};
  },
};
</script>

<style>
</style>