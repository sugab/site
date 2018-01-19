<template>
  <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-2 col-md-offset-1">
          <span class="section-title">Work Experience</span>
        </div>
        <div class="col-md-6">
          <span class="float-right">
            <img class="company-logo" src="../assets/images/resume/eaciit-logo.png" alt="">
          </span>
          <h1>EACIIT Vyasa Pte. Ltd.</h1>
          <h2>Senior Software Engineer</h2>
        </div>
        <div class="col-md-3">
          <div class="right-content">
            <div>
              <b>Singapore</b>
            </div>
            <div>Mar 2017 - Now</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <ul class="clear">
            <li>Lead development team to complete the software development requirements in a limited time frame and worked closely with Business Analyst and SME to ensure correct business logic, interactive UI, delivered the project with a short turn around</li>
            <li>Imported reports into platform and converted the same into raw data</li>
            <li>Wrote extensive test cases to ensure that the application is ready before the go-live date</li>
            <li>Was the single point of contact from a development perspective for all ad-hoc queries received from the client</li>
            <li>Imported Data from client’s raw data sources into platform and perform logical operation or query to summarize this data so it can be visualized to support decision making</li>
            <li>Built Machine Learning libraries based in Golang</li>
            <li>Worked with the team on Big Data projects using Go and MongoDB for various clients</li>
            <li>Convert business document into technical detail which is distributed among developers and handle SLA management to complete task</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <span class="float-right">
            <img class="company-logo" src="../assets/images/resume/bilinedev-logo.png" alt="">
          </span>
          <h1>BilineDev</h1>
          <h2>iOS Programmer</h2>
        </div>
        <div class="col-md-3">
          <div class="right-content">
            <div>
              <b>Bandung, Indonesia</b>
            </div>
            <div>May 2016 - Dec 2016</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <ul class="clear">
            <li>Responsible for building, handling, and maintenance of all iOS project</li>
            <li>Worked closely with CTO to analyze requirement into milestone and reasonable timeline</li>
            <li>Ensure information result validity, system stability, and data correctness to meet client’s expectation</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <span class="float-right">
            <img class="company-logo" src="../assets/images/resume/bc-logo.png" alt="">
          </span>
          <h1>Freelance</h1>
          <h2>iOS Programmer</h2>
        </div>
        <div class="col-md-3">
          <div class="right-content">
            <div>
              <b>Anywhere</b>
            </div>
            <div>2014 - Now</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <span>Worked on the below Projects:</span>
          <ul class="clear">
            <li>GIS Application requested by Directorate General of Land Transportation Indonesia</li>
            <li>Patient Medical Data Storing Application requested by Medical Doctor Network Indonesia</li>
            <li>Harbor Reporting Application requested by Directorate of Traffic and Sea Transportation Indonesia</li>
            <li>Transportation Dashboard &amp; Report Application requested by Ministry of Transportation Indonesia</li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      shows: []
    }
  },
  methods: {
    sequenceShow (show, callback) {
      var promise = Promise.resolve()

      for (const i of this.shows.keys()) {
        promise = promise.then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.$set(this.shows, i, show)
              resolve()
            }, 100)
          })
        })
      }

      if (typeof callback === 'function') {
        promise.then(() => {
          callback()
        })
      }
    }
  },
  mounted () {
    this.sequenceShow(true)
  },
  beforeRouteLeave (to, from, next) {
    this.sequenceShow(false, function () {
      next()
    })
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

h2 {
  margin-top: 0;
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
</style>

