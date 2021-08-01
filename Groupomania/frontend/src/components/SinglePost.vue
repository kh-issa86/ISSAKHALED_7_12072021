<template>
  <v-container fluid class="post-box">
    <v-card class="mx-auto credentials-card" max-width="600">
      <v-card-title class="v-card__title post-title-box">
        <div class="update-title mx-auto">
          <h1 class="font-weight-regular titre titre_new">Post Edit</h1>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div v-if="showMessage" class="d-flex justify-space-between">
          <div class="d-flex flex-column mx-auto">
            <span>Edit post ? </span>
            <div class="message ml-n4">
              <span>{{ post.message }}</span>
            </div>
          </div>
        </div>

        <div v-if="withMessage" class="text-box">
          <v-textarea
            label="Message"
            v-model="message"
            text="text"
            solo
            type="text"
            required
            name="input-7-4"
            class="mr-5 ml-3 text-area"
          ></v-textarea>
        </div>
        <div class="d-flex justify-center pt-3">
          <v-btn @click="toggleMessage"> Edit </v-btn>
        </div>
      </v-card-text>
      <v-form v-model="isValid" enctype="multipart/form-data" class="validate">
        <div v-if="withLink" class="link-box pb-5 pt-5">
          <v-text-field
            name="input-1-3"
            filled
            label="Gif link"
            v-model="link"
            type="text"
            auto-grow
            class="mr-5 ml-3"
          ></v-text-field>
        </div>
        <div v-if="showImage">
          <v-img
            v-if="post.imageUrl"
            :src="post.imageUrl"
            :max-height="250"
            :max-width="150"
            class="mx-auto mb-5"
          ></v-img>
        </div>
        <div v-if="showLink">
          <v-img
            v-if="post.link"
            :src="post.link"
            :max-height="250"
            :max-width="150"
            class="mx-auto mb-5"
          ></v-img>
        </div>
        <div v-if="withImage" class="pb-5 pt-5 d-flex justify-center">
          <label for="image" class="pr-3">Image</label>
          <input
            @change="uploadImage"
            type="file"
            aria-label="image input"
            accept="image/png, image/jpeg,image/bmp, image/gif"
            ref="file"
            name="image"
          />
        </div>
        <v-divider></v-divider>
        <v-card-text v-if="options" class="d-flex justify-center my-3">
          <div class="bloc-option">
            <v-btn
              v-if="post.link"
              @click="toggleLink"
              class="mx-2 mt-2"
              :elevation="2"
            >
              Change the Gif
            </v-btn>
            <v-btn
              v-if="post.imageUrl"
              @click="toggleImage"
              class="mx-2 mt-2"
              x-small
              :elevation="2"
            >
              Change the image
            </v-btn>
          </div>
        </v-card-text>
        <div class="d-flex justify-center">
          <v-btn @click="onSubmit" :disabled="!isValid" class="mb-3"
            >Post</v-btn
          >
          <v-btn to="/posts" class="ml-1">Cancel </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "SinglePost",
  data() {
    return {
      options: true,
      isValid: true,
      withLink: false,
      withImage: false,
      withMessage: false,
      showLink: true,
      showImage: true,
      showMessage: true,
      message: "",
      link: null,
      file: "",
    };
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
  },
  beforeMount() {
    let id = this.$route.params.id;
    this.$store.dispatch("getPostById", id);
  },
  methods: {
    toggleMessage() {
      this.withMessage = true;
      this.showMessage = false;
    },
    toggleLink() {
      this.withLink = true;
      this.showLink = false;
    },
    toggleImage() {
      this.withImage = true;
      this.showImage = false;
    },
    uploadImage() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    getBackToFeed() {
      this.$router.push("/posts");
    },
    onSubmit() {
      let id = this.$route.params.id;
      const formData = new FormData();
      if (this.message !== null) {
        formData.append("message", this.message);
      }

      if (this.link !== null) {
        formData.append("link", this.link);
      }
      formData.append("image", this.file);
      this.$store.dispatch("getPosts");
      this.$store.dispatch("updatePost", formData);
      this.$store.dispatch("getPostById", id);
      this.showImage = true;
      this.options = false;
      this.showLink = true;
      this.showMessage = true;
      this.withImage = false;
      this.withLink = false;
      this.withMessage = false;
      this.getBackToFeed();
    },

    newLink() {
      this.linkInput = true;
    },
    newText() {
      this.textInput = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.return-btn {
  position: absolute;
  right: 0;
  top: 10px;
}
.link-box {
  display: flex;
  align-content: center;
}
.message {
  width: 500px;
  margin: 1.2em !important;
  padding: 15px;
}
</style>
