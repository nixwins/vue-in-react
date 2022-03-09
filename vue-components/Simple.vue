<template>
  <h4>{{ message }} test rebuild with path</h4>
</template>

<script>
export default {
  name: "Simple",
  props: {
    message: {
      type: String,
      default: "This is default message",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>