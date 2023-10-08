<template>
  <div
    id="fileDropArea"
    v-cloak
    @drop.prevent="addFile"
    @dragover.prevent>
  </div>
</template>

<script>
export default {
  name: "FileDropper.vue",
  methods: {
    addFile(e) {
      // console.log("addfile");
      let file = e.dataTransfer.files[0];
      this.$parent.loadFromFileUpload(file);
    }
  }
}
</script>

<style scoped>
  #fileDropArea {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>
