<template>
  <AppNav />
  <h1>Feedback form</h1>
  <form class="feedback-form" @submit.prevent="submit">
    <div>
      <BaseInput
        class="input"
        label="Name"
        type="text"
        v-model="name"
        :error="errors.name"
      />
    </div>
    <div>
      <BaseInput
        class="input"
        label="Email"
        type="email"
        v-model="email"
        :error="errors.email"
        @change="handleChange"
      />
    </div>
    <div>
      <BaseTextarea
        label="Message"
        :error="errors.message"
        type="text"
        v-model="message"
      />
    </div>
    <div>
      <BaseButton type="submit" class="submit-button"> Submit </BaseButton>
    </div>
  </form>

  <div>
    {{ this.$store.state.feedbacks }}
  </div>
</template>

<script>
import { useField, useForm } from "vee-validate";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import AppNav from "@/components/AppNav.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { object, string } from "yup";

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseTextarea,
    AppNav,
  },

  data() {
    return {
      feedback: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  setup() {
    /*
    const required = (value) => {
      const requiredMessasge = "This field is required";
      if (value === undefined || value === null) return requiredMessasge;
      if (!String(value).length) return requiredMessasge;

      return true;
    };
    */

    // Rules for validating the sections in the form
    const validationSchema = object({
      name: string().required(),
      message: string().required(),
      email: string().email().required(),
      /*
      (value) => {
        const req = required(value);
        if (req !== true) return "This field is required";

        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(String(value).toLowerCase())) {
          return "Please enter a valid email address";
        }

        return true;
        
      },
      */
    });

    const { handleSubmit, errors } = useForm({
      validationSchema,
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
    });

    const { value: name } = useField("name");
    const { value: email } = useField("email");
    const { value: message } = useField("message");

    const store = useStore();
    name.value = store.state.name;
    email.value = store.state.email;

    const submitting = ref(false);
    const submitted = ref(false);


    const submit = handleSubmit((feedback) => {
      console.log("feedbacks", feedback);

      /*
      value = {
        ...feedback,
      };
      */

      store.commit("SET_NAME", name);
      store.commit("SET_EMAIL", email);

      console.log("value", feedback);
      submitting.value = true;
      setTimeout(() => {
        submitted.value = true;
      }, 2000);
      alert("Form have been submitted");
    });

    return {
      submit,
      email,
      name,
      message,
      errors,
      submitting,
      submitted,
    };
  },
};
</script>

<style>
.error {
  border: 1px solid red;
}

textarea {
}
</style>
