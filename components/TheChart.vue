<template>
  <div id="chart"></div>
</template>

<script>
//Import D3 for the visulization
import * as d3 from "d3";
export default {
  name: "Chart",
  props: ["subject_results"],
  data() {
    return {
      width: 550,
      height: 500,
      margin: {
         top: 20, right: 20, bottom: 30, left: 40
      },
      colorColumn: 'subject_name'
    };
  },
  computed: {
    yDomain() {
      //Get all the subject names and compile a array for them:Used as the y scale domain data.
      const max = d3.max(this.subject_results, d => d.score);
      //Return a compiled range from zero(0) to the maximum number in the score
      return [0, max]
    },
    xDomian() {
      //Get all the score for the subject and compile a new array: X scale data
      return this.subject_results.map((result) => result.subject_name);
    },
    svgWidth(){
        //Calculate the width of the svg using the margins
        return this.width -  this.margin.left - this.margin.right
    },
    svgHeight(){
        //Calculate the height of the svg, take the defined - the top and boton margins
        return this.height - this.margin.top - this.margin.bottom
    },
    colorDomain(){
      //Use the color scale to generate the domain
      return this.subject_results.map(result => result.subject_name)
    }
  },
  methods: {
    init() {
      //We are accessing the div with the id chart using d3's select method and appending svg
      const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
        .append("g")
        .style(
          "transform",
          `translate(${this.margin.left}px, ${this.margin.top}px)`
        );
      //
      //Set the svg as part of the template data. to access it at anytime.
      this.svg = svg;
      //Add the axis to the svg and animations to the axis
      this.gXAxis = this.svg
        .append("g")
        .attr("transform", `translate(0, ${this.svgHeight})`);
      //Y axis has no animations....
      this.gYAxis = this.svg.append("g");
    },
    axis() {
      //Define the y axis as an band scale, this is because every subject will be treated as a band
      //and values are in frm of string.
      this.scaleY = d3.scaleLinear().domain(this.yDomain).range([this.height, 0]);
      //
      //Define the X axis as linear scale, they are in number format not string.
      this.scaleX = d3
        .scaleBand()
        .domain(this.xDomian)
        .range([0, this.width])
        .paddingInner(0.2)
        .paddingOuter(0.2);
      //Init the color domain
      this.colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(this.colorDomain);
    },
    insertRect() {
      //insert the rectandle to the svg
      const rect = this.svg
        .selectAll("rect")
        //Add the data
        .data(this.subject_results);
       const  color = this.colorScale;
      //Enter the values for the presnetation and any attribe needed
      rect
        .enter()
        .append("rect")
        .attr("class", "bar-rect")
        .attr("width", this.scaleX.bandwidth)
        .attr("height", (d) => this.height - this.scaleY(d.score))
        .attr("x", (d) => this.scaleX(d.subject_name))
        .attr("y", (d) => this.scaleY(d.score))
        .attr("fill", function (d){ return color(d.subject_name)});
    },
    insertAxis() {
      //Insert the rectan
      const xAxis = d3.axisBottom(this.scaleX);
      const yAxis = d3
        .axisLeft(this.scaleY)
        .ticks(5)
        .tickFormat((d) => Math.round(d));
        //
        //Append the axis, use the animated axis.
        this.gXAxis.call(xAxis);
        this.gYAxis.call(yAxis);
        this.gXAxis.selectAll("text")
            .style("font-size", 14);
        
        this.gYAxis.selectAll("text")
            .style("font-size", 14);
    },
  },
  mounted() {
      //Initilaize the chart svg.
      this.init();
      //Define the axis needed to handle the visulisation.
      this.axis();
      //create the rectanle for the bands .
      this.insertRect();
      //Inser the axis to the svg
      this.insertAxis();
    }
};
</script>