<template>
  <v-container fluid class="credentials">
    <v-layout row class="credentials-layout">
      <v-col lg="4" md="5" sm="7" class="credentials-box">
        <v-card class="credentials-card" elevation="0" xs6>
          <v-card-title class="flat dense dark">
            <h1 class="font-weight-regular titre">Log-In</h1>
          </v-card-title>
          <v-card-text class="font-weight-dark">
            <v-form v-model="isValid">
              <v-text-field
                label="E-mail"
                v-model="email"
                type="email"
                :rules="[(v) => !!v || 'E-mail is required']"
                required
                class="input-group--focused"
                autocomplete="off"
              >
              </v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                :rules="[(v) => !!v || 'Password is required']"
                required
                class="input-group--focused"
                autocomplete="off"
              >
              </v-text-field>
            </v-form>
          </v-card-text>

          <div class="danger-alert message" v-html="errorMessage" />
          <div class="danger-alert message" v-html="message" />
          <v-card-actions>
            <v-btn
              plain
              color="indigo darken-4"
              class="dark credentials-card__submit btn-home"
              elevation="2"
              :disabled="!isValid"
              v-on:click.prevent="login"
              >Log-In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import Auth from "../services/Auth.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
      isValid: true,
      message: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await Auth.login({
          email: this.email,
          password: this.password,
        });
        this.message = response.data.message;

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$store.dispatch("getUserById", response.data.user.id);
        let router = this.$router;
        setTimeout(function() {
          router.push("/posts");
        }, 1500);
      } catch (error) {
        this.errorMessage = error.response.data.error;
        setTimeout(() => {
          this.email = "";
          this.password = "";
          this.errorMessage = "";
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss"></style>
