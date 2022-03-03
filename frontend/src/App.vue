<template>
  <div id="app">

    <router-view class="page" />
  </div>
</template>


<script>


export default {
  components: {

  },
};
</script>

<style>
.-text-error {
  color: tomato;
}

input.error,
select.error {
  margin-bottom: 0;
}

input + p.errorMessage {
  margin-bottom: 24px;
}

.error {
  border: 1px solid red;
}

.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
}

form {
  border: black solid 1px;
  font-size: 16px;
  width: 400px;
  padding: 15px 30px;
  margin: 50px auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.5);
}

form label,
form input,
form textarea {
  color: #2b3e51;
  display: inline-flex;
  outline: none;
}

form input,
form textarea {
  box-sizing: border-box;
}

form label {
  display: block;
  margin-bottom: 10px;
}

form > div {
  position: relative;
  margin: 20px 0;
}
</style>

