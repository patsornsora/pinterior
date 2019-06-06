<template>
  <!-- <div>11</div> -->
  <div class="modal-card" style="width: auto; margin: 20px;">
    <header class="modal-card-head" style="border-radius: 0px;">
      <p class="modal-card-title c-brown-black" style="text-align: center;">search by image</p>
    </header>
    <section class="modal-card-body">
      Select a file:
      <input type="file" name="myFile" ref="myFile" @change="previewFiles">
      <div style="text-align: right">
        <button
          class="button btn3 color-brown"
          style="margin-top: 16px; width: 30%;"
          @click="clickSearchImage"
        >SEARCH</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["valueImage"],
  data() {
    return {
      imageData: ""
    };
  },
  created() {},
  methods: {
    previewFiles(event) {
      // this.file = this.$refs.myFile.files[0];

      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    clickSearchImage() {
      this.$emit("childToParent", this.imageData);
    }
  }
};
</script>

<style>
</style>


