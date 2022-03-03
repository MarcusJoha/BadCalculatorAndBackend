<template>
  <label v-if="label">{{ label }}</label>

  <textarea
    :id="uuid"
    v-bind="{
      ...$attrs,
      onChange: updateValue,
    }"
    :value="modelValue"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
  />

  <div>
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>

<script>
import UniqueID from "@/features/UniqueID";
import SetupFormComponent from "@/features/SetupFormComponent";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
