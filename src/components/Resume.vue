<template>
  <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <div class="content-wrapper">
      <template v-for="(experience, index) in experiences">
        <div class="row" :key="index">
          <div class="col-md-2 col-md-offset-1">
            <span class="section-title" v-if="index == 0">Work Experience</span>
          </div>
          <div class="col-md-6">
            <span class="float-right">
              <img class="company-logo" :src="'/static/images/resume/' + experience.logo" alt="">
            </span>
            <h1>{{ experience.title }}</h1>
            <h2>{{ experience.subtitle }}</h2>
          </div>
          <div class="col-md-3">
            <div class="right-content">
              <div>
                <b>{{ experience.location }}</b>
              </div>
              <div>{{ experience.startDate }} - {{ experience.endDate }}</div>
            </div>
          </div>
        </div>
        <div class="row" :key="index">
          <div class="col-md-6 col-md-offset-3">
            <ul class="clear">
              <li v-for="(description, index) in experience.descriptions" :key="index">
                {{ description }}
              </li>
            </ul>
          </div>
        </div>
      </template>
      <div class="row">
        <div class="col-md-2 col-md-offset-1">
          <span class="section-title">Education</span>
        </div>
        <div class="col-md-6">
          <span class="float-right">
            <img class="company-logo" src="/static/images/resume/telu-logo.png" alt="">
          </span>
          <h1>Telkom University</h1>
          <h2>Bachelor of Computer Science (B.Sc.)</h2>
        </div>
        <div class="col-md-3">
          <div class="right-content">
            <div>
              <b>Bandung, Indonesia</b>
            </div>
            <div>Aug 2013 - Jan 2017</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <ul class="clear">
            <li>Specialization in Machine Learning and Image Processing</li>
            <li>Research focus on PCO classification based on ultrasound image using Convolutional Neural Network and Speech recognition and classification of hijaiyah letter with haraakat with Prof. Adiwijaya and M. Syahrul Mubarok M. Sc.</li>
            <li>Publish machine learning paper on IEEE and present it at ICOICT 2017 Malaysia</li>
            <li>Received full scholarship to pursue my specialization</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-1">
          <span class="section-title">Achievement</span>
        </div>
        <div class="col-md-6">
          <div class="col-md-6 no-padding" v-for="(achievement, index) in achievements" :key="index">
            <h3>{{ achievement.year }}</h3>
            <p v-for="(desc, index) in achievement.descriptions" :key="index">
              {{ desc }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-md-offset-1">
          <span class="section-title">Skills</span>
        </div>
        <div class="col-md-6">
          <h1>Language</h1>
          <p>
            Native in Bahasa Indonesia, fluent in English
          </p>
          <h1>Technology</h1>
          <p>
            Proficient in iOS Development using Swift, MongoDB, SQL Database, 
            JavaScript, Python, Go, Machine Learning, and Image Processing
          </p>
          <h1>Hobbies</h1>
          <p>
            Trekking, travelling, and adventure
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import achievements from '../assets/jsons/achievements.json'
import experiences from '../assets/jsons/experiences.json'

export default {
  data () {
    return {
      achievements: achievements,
      experiences: experiences
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  margin: 0;
}

h2, h3 {
  margin-top: 0;
}

p {
  margin-top: 0;
  margin-bottom: 20px;
}

ul.clear {
  margin-top: 0;
  padding: 0;
  list-style-type: none;
}

ul > li {
  padding-bottom: 20px;
  text-align: justify;
}

.content-wrapper {
  padding: 20px 20px;
  text-align: left;
  background-color: white;
  color: black;
}

.float-right {
  float: right;
  text-align: right;
}

.section-title {
  font-size: 1.8em;
  font-weight: bold;
}

.right-content {
  margin-bottom: 10px;
}

.company-logo {
  float: left;
  width: 50px;
  margin-right: 20px;
}

.card-content {
  margin-top: 15px;
}

.no-padding {
  padding: 0;
}
</style>

