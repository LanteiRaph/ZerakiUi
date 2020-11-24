<template>
  <span>
    <div id="banner">
      <img src="~/assets/logo.png" class="logo" />
      <div class="banner-text">
        <h1>Lets Design a Home</h1>
        <p>Don't Stress, We Design The Perfect Home...</p>
        <div class="banner-btn">
          <a href="#"><span></span> Find Out</a>
          <a href=""> <span></span> Read More</a>
        </div>
      </div>
    </div>
    <SideNav />
  </span>
</template>
<script>
//Import needed components
import SideNav from "@/components/TheSideNav.vue";
//
export default {
  name: "Banner",
  props: [],
  components: { SideNav },
  data() {
    return {};
  },
};
</script>

<style>
#banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #BFB8AD),
    url(~assets/banner.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.logo {
  width: 140px;
  position: absolute;
  top: 4%;
  left: 10%;
}
.banner-text {
  text-align: center;
  color: white;
  padding: 160px;
}
.banner-text h1 {
  font-size: 100px;
  font-family: "Big Shoulders Stencil Text", cursive;
  color: white;
}

.banner-text p {
  font-size: 20px;
  font-style: italic;
}
.banner-btn {
  margin: 70px auto 0;
}
.banner-btn a {
  text-decoration: none;
  width: 150px;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: #fff;
  border: 0.5px solid #fff;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}

.banner-btn a span {
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}
.banner-btn a:hover span {
  width: 100%;
}
.banner-btn a:hover {
  color: black;
}
/*Style for smaller screens*/
@media screen and (max-width: 774px) {
    .banner{
        text-align: unset;
    }
    .logo{
        width: 70px;
    }
  .banner-text h1 {
    font-size: 20px;
  }
  .banner-text a {
      display: block;
      margin: 20px auto;
  }

}
</style>