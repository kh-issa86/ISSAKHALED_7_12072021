<template>
  <nav>
    <!-- Start of app toolbar -->
    <v-app-bar app dark class="nav">
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <v-img
            alt="Groupomania Logo"
            class="shrink mr-2"
            contain
            to="/"
            :src="require('../assets/icon-left-font-monochrome-white.png')"
            transition="scale-transition"
            width="250"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLogged === true"
        outlined
        color="white"
        aria-label="home feed"
        class="input-group dark btn-home"
        to="/posts"
        >Home</v-btn
      >
      <v-btn
        v-if="isLogged === false"
        plain
        aria-label="Connection"
        color="blue-grey darken-2"
        class="input-group--focused btn-home"
        to="/login"
        >Login</v-btn
      >
      <v-btn
        v-if="isLogged === false"
        plain
        color="blue-grey darken-2"
        aria-label="Subscription"
        class="input-group--focused btn-logout"
        to="/signup"
        >Sign-Up</v-btn
      >

      <v-btn
        v-if="isLogged === true"
        aria-label="profil"
        :to="`/account/${user.id}`"
        icon
        class="input-group--focused mr-4"
        ><v-avatar>
          <img
            v-if="user.photo"
            alt="Avatar"
            :src="user.photo"
            class="photo-header"
          />
          <v-icon v-if="user.photo === null" :color="isLoggedIn" size="3em"
            >$vuetify.icons.account</v-icon
          >
        </v-avatar>
      </v-btn>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: "PageHeader",
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
    isLoggedIn() {
      if (this.$store.state.isLoggedIn) {
        return "green";
      } else {
        return "";
      }
    },
  },
  methods: {
    getProfile(id) {
      this.$router.push(`/account/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.v-btn {
  margin-left: 20px;
}
</style>
