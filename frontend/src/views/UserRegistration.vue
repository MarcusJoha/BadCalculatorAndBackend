<template>
<h1>Registrate As New User</h1>
  <div>
    <form @submit.prevent="register">
      <Baseinput label="Name" v-model="name" type="text" />

      <Baseinput label="Email" v-model="email" type="email" />

      <Baseinput label="Password" v-model="password" type="password" />

      <BaseButton type="submit"> Register </BaseButton>
    </form>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>
