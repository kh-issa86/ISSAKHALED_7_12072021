<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark" class="navbar" text-variant="white">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item text="" right>Sign-Up</b-nav-item>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>




    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">

          <b-card class="p-3" bg-variant="dark" text-variant="white">
            <div class="login">
              <h3 class="mb-4 test">Login</h3>
            </div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                  id="input-group-1"
                  label="Email address"
                  label-for="input-1"
                  class="p-2">
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2" class="p-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="Enter Password"
                    required
                ></b-form-input>
              </b-form-group>



              <b-form-group id="input-group-3" class="p-2" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    v-model="form.rememberMe"
                    id="checkboxes-4"
                    :aria-describedby="ariaDescribedby"
                >
                  <b-form-checkbox value="me">Remember Me</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-button class="m-2" type="submit" variant="outline-primary">Submit</b-button>
              <b-button type="reset" variant="outline-danger">Reset</b-button>
            </b-form>
          </b-card>


        </b-col>


      </b-row>

    </b-container>
  </div>
</template>







<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.form.rememberMe = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>





<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body{
  background: #989899 !important;
  font-family: 'Roboto', sans-serif;

}
.navbar{
  height: 7rem;
}

.navbar-expand {
  justify-content: flex-end!important;
}
.navbar-nav{
  margin-right: 7em!important;
}
.nav-item{
  margin: 1em;
  background-color: #283232;
}

.login h3{
  text-align: center;
  font-size: 4em;
}
.card {
  border-radius: 1.25rem!important;
  box-shadow: 0em 0em 3em .1em #383e99!important;
}
.custom-control-input{
  margin-right: .5em;
}

</style>
