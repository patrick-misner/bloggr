<template>
          <div class="col-md-8 selectable" @click="setActive">
          <div class="bg-dark text-light shadow rounded m-3 p-3 text-center border border-3 border-white d-flex flex-row justify-content-between align-items-center">
            <h4>{{ blog.title }}</h4>
              <h4 class=""><img class="m-3" :src="blog.creator.picture" alt=""/>by:{{ blog.creator.name }}</h4>
          </div>
        </div>
</template>

<script>
import { Modal } from "bootstrap"
import { blogsService } from "../services/BlogsService"

export default {
  props: { blog: {type: Object, required: true}},
  setup(props){
    return{
      setActive(){
        blogsService.setActive(props.blog)
        Modal.getOrCreateInstance(document.getElementById('blog-modal').show())
      }
    }
  }

}
</script>

<style>

img {
  width: 50px;
  max-width: 50px;

}

</style>