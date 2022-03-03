<template>
  <div id="nav">
    <router-link to="/"> Home </router-link> |
    <router-link to="/calculator"> Calculator </router-link> |
    <router-link to="/feedback"> Feedback </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
  font-size: 18px;
  color: black;
}
a:hover {
  color: blue;
}

</style>
