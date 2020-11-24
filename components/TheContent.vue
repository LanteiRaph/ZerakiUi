<template>
  <a-layout-content style="margin: 0 16px; height: 450px" class="student__info flexbox">
    <a-card style="width: 300px" class="card">
      <img
        slot="cover"
        alt="example"
        :src="`${student.student_photo}`"
        height="320px"
      />
      <a-card-meta title="Ofelia Mckay" :description="`${student.exam_name} `">
      </a-card-meta>
      <a-card-meta :description="`Main Grade ${student.mean_grade} `">
      </a-card-meta>
      <a-card-meta :description="`Avg: ${student.mean_marks.avg_score} `">
      </a-card-meta>
    </a-card>
    <a-card
      title="Perfomance"
      class="student__remarks"
      :style="{ width: '300px' }"
    >
      <a-card title="OverRoll" :style="{ height: 'auto' }">
        <span id="overroll">
          <p>Position: {{ student.overall_position.position }}</p>
          <p>Out Of: {{ student.overall_position.position_out_of }}</p>
        </span>
      </a-card>
      <a-card title="Stream" :style="{ marginTop: '10px' }">
        <p>Position: {{ student.stream_position.position }}</p>
        <p>Out Of: {{ student.stream_position.position_out_of }}</p>
      </a-card>
    </a-card>
    <a-card
      title="Perfomance Remarks"
      class="student__remarks"
      style="width: 300px"
    >
      <a-card title="Principal">
        {{ student.principals_remarks }}
      </a-card>
      <a-card title="Class Teacher" :style="{ marginTop: '16px' }">
        {{ student.class_teachers_remarks }}
      </a-card>
    </a-card>
    <div class="timeline card">
      <a-timeline>
        <h2>Previous Perfomance</h2>
        <a-timeline-item v-for="x in previous_perfomance" :key="x.exam_name"
          >{{ x.exam_name }} Avg:{{ x.avg_score }}</a-timeline-item
        >
      </a-timeline>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "Content",
  props: ["student"],
  data() {
    return {};
  },
  computed: {
    previous_perfomance() {
      return this.student.student_performance_over_time.filter(
        (perfomance) => perfomance.exam_name != this.student.exam_name
      );
    },
  },
};
</script>

<style scoped>
 .card{
   flex-basis: 20%;
 }
</style>