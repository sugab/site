<template>
  <div class="container">
    <div class="text">
      <span class="name boxed">{{name}}</span>
    </div>
    <div class="subtitle">
      <span class="boxed">Fullstack Developer, Data Geek, and Traveller.</span>
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
  margin-left: 10%;
}

.boxed {
  display: inline-block;
  background-color: rgba(236, 240, 241, 0.8);
  padding: 0 10px;
}

.name {
  font-weight: bold;
  font-size: 2.5em;
}
</style>
