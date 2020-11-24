<template>
  <div class="service">
    <div class="title-text">
      <p>Services</p>
      <h1>We Provide Better</h1>
    </div>
    <div class="service-box">
        <div class="single-service">
            <img src="~/assets/service_1.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Inetrior Design</h3>
                <hr>
                <p>Lets create the perect home for you and your family. A home is not just a home</p>
            </div>
        </div>
        <div class="single-service">
            <img src="~/assets/service_2.jpg" alt="">
            <div class="overlay"></div>
            <div class="service-desc">
                <h3>Furniture Building</h3>
                <hr>
                <p>Lets create the perect home for you and your family. A home is not just a home</p>
            </div>
        </div>
        <div class="single-service">
            <img src="~/assets/service_1.jpg" alt="">
            <div class="overlay"></div>
             <div class="service-desc">
                <h3>Moving Helpers</h3>
                <hr>
                <p>Lets create the perect home for you and your family. A home is not just a home</p>
            </div>
        </div>
        <div class="single-service">
            <img src="~/assets/service_1.jpg" alt="">
            <div class="overlay"></div>
             <div class="service-desc"> 
                <h3>Extreria Design</h3>
                <hr>
                <p>Lets create the perect home for you and your family. A home is not just a home</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: [],
  data() {
    return {};
  },
};
</script>

<style >
.service{
    width: 100%;
    padding: 70px 0;
    background-color: #efefef;
}
.service-box{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
}

.single-service{
    flex-basis: 48%;
    text-align: center;
    border-radius: 7px;
    color: white;
    margin-bottom: 20px;
    position: relative;
}
.single-service img{
    width: 100%;
    border-radius: 7px;
}
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 7px;
    cursor: pointer;
    background: linear-gradient(rgba(0,0,0,0.5), #823329);
    opacity: 0;
    transition: 1s;
}
.single-service:hover .overlay{
    opacity: 1;
}

.service-desc{
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 1s;
    opacity: 0;
}

hr{
    background: #fff;
    height: 2px;
    border: 0;
    margin: 15px auto;
    width: 60%;
}

.service-desc p{
    font-size: 14px;
}
.single-service:hover .service-desc{
    bottom: 40%;
    opacity: 1;
}

@media screen and (max-width: 770px) {
    .single-service{
        flex-basis: 100%;
        margin-bottom: 30px;
    }
    .service-desc p{
        font-size: 10px;
    }
    hr{
        margin: 5px auto;
    }
    .single-service:hover .service-desc{
    bottom: 25% !important;
}

}
</style>