<template>
  <div class="feature">
    <div class="title-text">
      <p>Features</p>
      <h1>Why choose Us</h1>
    </div>
    <div class="feature-box">
      <div class="features">
        <h1>Experinced Staff</h1>
        <div class="features-desc">
          <div class="feature-icon">
            <i class="fa fa-shield"></i>
          </div>
          <div class="features-text">
            <p>
              A workforce that proffesinal and dedicated only to you. Only Bees
              can bit Us
            </p>
          </div>
        </div>
        <h1>Pre Booking Online</h1>
        <div class="features-desc">
          <div class="feature-icon">
            <i class="fa fa-check-square-o"></i>
          </div>
          <div class="features-text">
            <p>
              A workforce that proffesinal and dedicated only to you. Only Bees
              can bit Us
            </p>
          </div>
        </div>
        <h1>Experinced Staff</h1>
        <div class="features-desc">
          <div class="feature-icon">
            <i class="fa fa-inr"></i>
          </div>
          <div class="features-text">
            <p>
              A workforce that proffesinal and dedicated only to you. Only Bees
              can bit Us
            </p>
          </div>
        </div>
      </div>
      <div class="features-img">
        <img src="~/assets/why_us.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  props: [],
  data() {
    return {};
  },
};
</script>

<style >
.feature {
  width: 100%;
  padding: 70px 0;
}
.title-text {
  text-align: center;
  padding-bottom: 70px;
}
.title-text p {
  margin: auto;
  font-size: 20px;
  color: #8a3033;
  font-weight: bold;
  position: relative;
  z-index: 1;
  display: inline-block;
}
.title-text p::after {
  content: "";
  width: 50px;
  height: 35px;
  background: linear-gradient(#823329, #fff);
  position: absolute;
  top: -20px;
  left: 0;
  z-index: -1;
  transform: rotate(10deg);
  border-top-left-radius: 35px;
  border-bottom-right-radius: 35px;
}
.title-text h1 {
  font-size: 50px;
}

.feature-box {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.features {
  flex-basis: 50%;
}
.features-img {
  flex-basis: 50%;
  margin: auto;
}
.features-img img {
  width: 70%;
  border-radius: 10px;
  opacity: 2;
}
.features h1 {
  text-align: left;
  margin-bottom: 10px;
  font-weight: 100;
  color: #823329;
}
.features-desc {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.features-desc .fa {
  width: 50px;
  height: 50px;
  font-size: 30px;
  line-height: 50px;
  border-radius: 8px;
  color: #823329;
  border: 1px solid #823329;
}
.features-desc p {
  margin-left: 5px;
}
@media screen and (max-width: 770px) {
    .title-text h1{
        font-size: 35px;
    }
    .features{
        flex-basis: 100%;
    }
    .features-img{
        flex-basis: 100%;
    }
    .features-img img{
        width: 100%;
    }
}
</style>