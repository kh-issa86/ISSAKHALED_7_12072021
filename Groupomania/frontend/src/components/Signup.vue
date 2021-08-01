<template>
  <v-container fluid class="credentials">
    <v-layout row class="credentials-layout">
      <v-col lg="4" md="5" sm="7" class="credentials-box">
        <v-card class="credentials-card" color="text2" elevation="0" xs6>
          <v-card-title flat dense dark>
            <h1 class="font-weight-regular titre">Sign-Up</h1></v-card-title
          >
          <v-card-text class="font-weight-light">
            <v-form v-model="isValid" autocomplete="off">
              <v-text-field
                label="User name"
                v-model="pseudo"
                type="text"
                :rules="[(v) => !!v || 'User name is required']"
                required
                class="input-group--focused"
              ></v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                type="email"
                :rules="emailRules"
                required
                class="input-group--focused"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                :rules="[(v) => !!v || 'Password is required']"
                required
                class="input-group--focused"
                autocomplete="off"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <div class="danger-alert message" v-html="errorMessage" />
          <div class="danger-alert message" v-html="message"></div>

          <v-card-actions class="d-flex justify-center">
            <v-btn
              plain
              color="green darken-4"
              class="btn-home"
              elevation="2"
              :disabled="!isValid"
              v-on:click.prevent="signup"
              >Sign-Up</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import Auth from "../services/Auth.js";
export default {
  name: "Signup",
  data() {
    return {
      pseudo: "",
      email: "",
      password: "",
      errorMessage: null,
      message: null,
      isValid: true,
      hasSignedUp: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be validated !",
      ],
      pseudoRules: [
        (v) =>
          v.length <= 30 ||
          "Password must be 8 letters minimum, upper and lower case, no symbols",
      ],
      passwordRules: [
        (v) =>
          v.length <= 30 ||
          "Password must be 8 letters minimum, upper and lower case, no symbols",
      ],
    };
  },
  methods: {
    async signup() {
      try {
        const response = await Auth.signup({
          pseudo: this.pseudo,
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
        }, 15000);
      } catch (error) {
        this.errorMessage = error.response.data.error;
        setTimeout(() => {
          this.errorMessage = "";
        }, 15000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
