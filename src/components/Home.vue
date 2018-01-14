<template>
  <div class="container">
    <div class="text">
      <span class="name boxed">{{name}}</span>
    </div>
    <div class="text">
      <span class="subtitle boxed">Fullstack Developer, Data Geek, and Traveller.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      name: 'Bagus Cahyono'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 0 20px;
  margin-top: 10%;
  margin-right: 10%;
  text-align: right;
}

.boxed {
  display: inline-block;
  background-color: rgba(236, 240, 241, 0.8);
  padding: 5px 10px;
  margin: 2px;
}

.name {
  font-weight: bold;
  font-size: 3em;
}

.subtitle {
  font-size: 1.2em;
}
</style>
