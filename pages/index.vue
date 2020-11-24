<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <SideNav :studentName="student.student_name"/>
    <a-layout>
      <a-layout-content>
        <a-breadcrumb style="margin: 15px 16px">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            >Student Assesment |
            <span id="student-name">{{
              student.student_name
            }}</span></a-breadcrumb-item
          >
        </a-breadcrumb>
      </a-layout-content>
      <div class="content ">
        <Content :student="student"/>
      </div>
      <a-layout-content style="margin: 5px 16px">
        <div
          :style="{  background: '#fff', height: '600px' }"
          class="flexbox"
        >
        <Chart :subject_results="student.subject_results"/>
        
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center; height: 15px">
        Develped By Lantei @2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
//Import the any needed componets for the view.
import SideNav from '~/components/TheSideNav.vue'
import Content from '~/components/TheContent.vue'
import Chart from '~/components/TheChart.vue'

//
export default {
  //Fetch the student data from the file, use the file reader for server side.
  //Or in case of failer use axios for client side.
  async asyncData({ req, isServer, params, store, $axios }) {
    const data = {};
    if (process.server) {
      data.student = JSON.parse(
        require("fs").readFileSync("./static/data.json", "utf8")
      );
    } else {
      data.student = await $axios.get("/data.json").then((res) => res.data);
    }
    return { student: data.student };
  },
  name: "SchoolDashboard",
  components:{SideNav,Content,Chart},
  data() {
    return {
      student: null,
    };
  },
  computed: {
  },
  mounted() {
  },
};
</script>

<style>
.timeline {
  padding: 10px 0;
}
.student__info {
  display: flex;
}
.student__remarks {
  margin: 0 10px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
p {
  margin: 2px;
}
</style>
