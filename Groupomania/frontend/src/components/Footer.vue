<template>
  <v-footer fixed dark class="footer">
    <v-btn
      v-show="isLogged"
      outlined
      color="white"
      class="ml-2 mr-4 dark btn-logout"
      @click="logOut"
      to="/"
      >Logout</v-btn
    >
    <div class="">{{ new Date().getFullYear() }} © Groupomania</div>
  </v-footer>
</template>
<script>
export default {
  name: "PageFooter",
  data: () => ({}),
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
  methods: {
    logOut: function() {
      this.$store.dispatch("logOut");
    }
  }
};
</script>
<style lang="scss" scoped></style>
