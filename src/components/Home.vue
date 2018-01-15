<template>
  <div>
    <div class="header">
      <ul class="menu">
        <li class="active">About</li>
        <li>Resume</li>
        <li>Photos</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="content-container">
      <div class="text" data-aos="fade-left" data-aos-delay="300">
        <span class="name boxed">{{name}}</span>
      </div>
      <div class="text" data-aos="fade-left" data-aos-delay="500">
        <span class="subtitle boxed">Fullstack Developer, Data Geek, and Traveller</span>
      </div>
      <div data-aos="fade-left" data-aos-delay="700">
        <div class="boxed long-text">
          <p>
            I'm the youngest <b>Senior Software Engineer</b> at EACIIT Singapore, I do beautiful magic with my codes and sometimes freelance iOS projects.
            <br>
            I love working with data, thanks to my professor he helps me publish my first paper about machine learning.
          </p>
        </div>
      </div>
      <div class="social-links" data-aos="fade-left" data-aos-delay="900">
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
        <span class="boxed">
          <a class="social-link" href="mailto:baguscah77@gmail.com" target="blank">
            <i class="fas fa-envelope"></i>
            <b>baguscah77@gmail.com</b>
          </a>
        </span>
      </div>
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

.header {
  height: 80px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.menu {
  margin: 0 5%;
  padding: 0 20px;
  float: right;
}

.menu li {
  display: inline-block;
  list-style: none;
  padding: 10px;
  color: white;
}

.menu li.active {
  font-weight: bold;
}

.content-container {
  padding: 0 20px;
  margin: 0 5%;
  margin-top: 5%;
  text-align: right;
}

.boxed {
  display: inline-block;
  background-color: rgba(236, 240, 241, 0.8);
  padding: 5px 10px;
  margin: 2px;
}

.long-text {
  max-width: 50%;
  margin: 40px 0;
  font-size: 1.2em;
}

.long-text p {
  margin: 0;
}

.name {
  font-weight: bold;
  font-size: 3em;
}

.subtitle {
  font-size: 1.2em;
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

@media (max-width: 540px) {
  .long-text {
    max-width: 100%;
    margin: 40px 0;
    font-size: 1.2em;
  }
}
</style>
