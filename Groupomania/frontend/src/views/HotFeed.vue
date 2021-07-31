<template>
  <v-container fluid class="feed-container">
    <v-row class="bloc">
      <v-col sm="12" md="7" class="mx-auto">
        <v-card flat class="posts-header" elevation="7">
          <v-img
            :src="require('../assets/icon-2.svg')"
            class="my-2"
            contain
            elevation="7"
            height="60"
            alt="logo groupomania"
          />
          <h1 class="font-weight-regular text-center">Home Feed</h1>
          <v-card-title
            class="d-flex header-btns justify-space-around"
            flat
            dense
            dark
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  to="/posts"
                  outlined
                  color="blue-grey lighten-2"
                  class="recents"
                  v-bind="attrs"
                >
                  Most recent
                </v-btn>
              </template>
              <span>Most Recent Posts</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="blue-grey lighten-2"
                  to="/add"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon
                    aria-label="publier"
                    role="img"
                    aria-hidden="true"
                    size="2em"
                    >$vuetify.icons.pen</v-icon
                  >
                </v-btn>
              </template>
              <span>Write New Post</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  to="/hot"
                  outlined
                  class="hot-posts"
                  color="blue-grey lighten-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Most Liked
                </v-btn>
              </template>
              <span>Most Liked Posts</span>
            </v-tooltip>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="bloc2 text-center d-flex flex-column justify-center align-center"
    >
      <v-col sm="12" md="6" class="mx-auto">
        <v-card
          v-if="$store.state.posts.length !== 0"
          class="posts-card mx-auto"
          elevation="2"
        >
          <v-card-text>
            <posts
              v-for="post of posts"
              :key="post.id"
              :post="post"
              :id="post.id"
              @deletePost="deletePost(post.id)"
              @likePost="likePost(post.id)"
              @reloadFeed="reloadFeed()"
              @onSubmitComment="onSubmitComment(post.id)"
              @deleteComment="deleteComment(comment.id)"
            >
            </posts>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card
      v-if="$store.state.posts.length === 0"
      class="posts-card mx-auto"
      elevation="0"
    >
      <v-card-title class="d-flex justify-center" flat dense dark>
        <span>Sois le premier à publier un post !</span>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import Posts from "@/components/Posts.vue";
import { mdiPencilOutline } from "@mdi/js";
export default {
  name: "HotFeed",
  components: {
    Posts
  },
  data() {
    return {
      errorMessage: null,
      mdiPencilOutline
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    isLiked() {
      return this.$store.getters.isLiked;
    }
  },
  async beforeMount() {
    this.$store.dispatch("getHotPosts");
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch("deletePost", id);
    },
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
    },

    likePost(id) {
      const data = 1;
      this.$store.dispatch("likePost", {
        id: id,
        data: data
      });
    }
  }
};
</script>

<style></style>
