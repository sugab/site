<template>
  <div class="container">
    <div class="text" data-aos="fade-left" data-aos-delay="300">
      <span class="name boxed">{{name}}</span>
    </div>
    <div class="text" data-aos="fade-left" data-aos-delay="600">
      <span class="subtitle boxed">Fullstack Developer, Data Geek, and Traveller.</span>
    </div>
    <div class="social-links" data-aos="fade-left" data-aos-delay="1000">
      <span class="boxed">
        <a class="social-link" href="https://github.com/sugab" target="blank">
          <i class="fab fa-github"></i>
          <b>github</b>
        </a>
      </span>
      <span class="boxed">
        <a class="social-link" href="https://stackoverflow.com/users/903350/bagus-cahyono" target="blank">
          <i class="fab fa-stack-overflow"></i>
          <b>stackoverflow</b>
        </a>
      </span>
      <span class="boxed">
        <a class="social-link" href="https://www.linkedin.com/in/cahyonobagus" target="blank">
          <i class="fab fa-linkedin"></i>
          <b>linkedin</b>
        </a>
      </span>
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
a {
  text-decoration: none;
  color: inherit;
}

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

.social-links {
  margin-top: 20px;
}

.social-link {
  padding-left: 4px;
}

.social-link > b {
  display: inline-block;
  max-width: 0px;
  overflow: hidden;
  transition: all 1s ease;
}

.social-link:hover > b {
  max-width: 200px;
}
</style>
