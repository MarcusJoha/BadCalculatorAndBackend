<template>
  <h1>Log in</h1>
  <div>
    <form @submit.prevent="logIn">
      <Baseinput label="Email" v-model="email" type="email" />

      <Baseinput label="Password" v-model="password" type="password" />

      <BaseButton type="submit">Log in!</BaseButton>
    </form>
    <div class="register" id="reg" v-if="!loggedIn">
      <h3>Register as an User!</h3>
      <router-link to="/register">Register</router-link>
    </div>
  </div>
</template>

<script>
import Baseinput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    Baseinput,
    BaseButton,
  },

  data() {
    return {
      email: "",
      password: "",
      loggedIn: Boolean,
    };
  },

  methods: {
    logIn() {
      this.loggedIn = null;
      const users = this.$store.state.users;

      for (let i = 0; i < users.length; i++) {
        const element = users[i];

        if (
          element.email === this.email &&
          element.password === this.password
        ) {
          this.loggedIn = true;
          // Trenger ikke å kalle på denne, men greit til andre oppgaver
          this.$store
            .dispatch("login", {
              // sends a login object
              email: this.email,
              password: this.password,
            })
            .then(() => this.$router.push({ name: "home" }));
          break;
          //console.log("Useres fra store", "email: " + element.email + "\nPassword: " + element.password)
        } else {
          this.loggedIn = false;
        }
      }
      if (this.loggedIn) {
        alert("Welcome");
      } else {
        alert("You are not a user");
      }

      // kan ikke bruke break in forEach loop in javascript :(

      /*
      this.$store.state.users.forEach((element) => {
        if (
          element.email === this.email &&
          element.password === this.password
        ) {
          this.loggedIn = true;
          // Trenger ikke å kalle på denne, men greit til andre oppgaver
          this.$store
            .dispatch("login", {
              // sends a login object
              email: this.email,
              password: this.password,
            })
            .then(() => this.$router.push({ name: "home" }));
          //console.log("Useres fra store", "email: " + element.email + "\nPassword: " + element.password)
        } else {
          this.loggedIn = false;
        }
      });
      if (this.loggedIn) {
        alert("Welcome");
      } else {
        alert("You are not a user");
      }
      */
    },
  },
};
</script>

<style scoped>
div a {
  color: red;
  border: solid 1px red;
  padding: 5px;
}
</style>
