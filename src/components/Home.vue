<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
  >
    <div class="content-wrapper">
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
      >
        <div class="text" v-if="shows[0]">
          <span class="title boxed">{{ name }}</span>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
      >
        <div class="text" v-if="shows[1]">
          <span class="subtitle boxed"
            >Lead Software Engineer & ML Engineer</span
          >
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
      >
        <div v-if="shows[2]">
          <div class="long-text">
            <p>
              <span class="boxed">
                I started coding from high school and have a lot of experience
                in software engineering. Was a full stack programmer but I want
                to focus my skill to go and python. Love and have experience
                doing data science and machine learning.
              </span>
            </p>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft"
      >
        <div class="social-links" v-if="shows[3]">
          <span class="boxed">
            <a
              class="social-link"
              href="https://github.com/sugab"
              target="_blank"
            >
              <font-awesome-icon :icon="faGithub" />
              <b>github</b>
            </a>
          </span>
          <span class="boxed">
            <a
              class="social-link"
              href="https://stackoverflow.com/users/903350/bagus-cahyono"
              target="_blank"
            >
              <font-awesome-icon :icon="faStackOverflow" />
              <b>stackoverflow</b>
            </a>
          </span>
          <span class="boxed">
            <a
              class="social-link"
              href="https://www.linkedin.com/in/cahyonobagus"
              target="_blank"
            >
              <font-awesome-icon :icon="faLinkedin" />
              <b>linkedin</b>
            </a>
          </span>
          <span class="boxed">
            <a
              class="social-link"
              href="mailto:baguscah77@gmail.com"
              target="_blank"
            >
              <font-awesome-icon :icon="faEnvelope" />
              <b>baguscah77@gmail.com</b>
            </a>
          </span>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

export default {
  name: "Home",
  data() {
    return {
      name: "Bagus Cahyono",
      shows: [false, false, false, false],
    };
  },
  computed: {
    faGithub() {
      return faGithub;
    },
    faStackOverflow() {
      return faStackOverflow;
    },
    faLinkedin() {
      return faLinkedin;
    },
    faEnvelope() {
      return faEnvelope;
    },
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    sequenceShow(show, callback) {
      var promise = Promise.resolve();

      for (const i of this.shows.keys()) {
        promise = promise.then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.$set(this.shows, i, show);
              resolve();
            }, 100);
          });
        });
      }

      if (typeof callback === "function") {
        promise.then(() => {
          callback();
        });
      }
    },
  },
  mounted() {
    this.sequenceShow(true);
  },
  beforeRouteLeave(to, from, next) {
    this.sequenceShow(false, function () {
      next();
    });
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.content-wrapper {
  padding: 5%;
  text-align: right;
  overflow: hidden;
}

.content-wrapper > div {
  margin: 10px;
}

.boxed {
  background-color: rgba(236, 240, 241, 0.8);
  padding: 5px;
}

.long-text {
  line-height: 2em;
  margin: 40px 0 40px auto;
  max-width: 50%;
  font-size: 1.2em;
}

.long-text span {
  padding: 0.3em 0;
  box-shadow: 10px 0 0px 0px rgba(236, 240, 241, 0.8), -10px 0 0px 0px rgba(236, 240, 241, 0.8);
  box-decoration-break: clone;
}

.social-link {
  padding-left: 4px;
  font-size: 0.9em;
}

@media (max-width: 540px) {
  .long-text {
    max-width: 100%;
    font-size: 1.2em;
  }
}
</style>
