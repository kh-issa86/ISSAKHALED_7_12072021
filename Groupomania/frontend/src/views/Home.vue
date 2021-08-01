<template>
  <v-container class="home-container">
    <v-row class="theme--dark text-center bandeau">
      <v-col cols="12">
        <v-img
          :src="require('../assets/icon.svg')"
          class="my-2"
          contain
          height="100"
          alt="logo"
        />
      </v-col>

      <v-col class="mb-4 px-5">
        <h1 class="display-1 font-weight-bold mb-5">
          Welcome to Groupomania internal Social Network!
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  methods: {
    logOut: function() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>
<style lang="scss" scoped></style>
