<template>
  <p aria-live="assertive" class="errorMessasge" :id="id">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
