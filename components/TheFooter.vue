<template>
  <div class="footer">
    <div class="title-text">
      <p>Contact Us</p>
      <h1>It's So easy</h1>
    </div>
    <div class="footer-row">
      <div class="footer-left">
        <h2>Register with us Today</h2>
        <div class="footer-btn">
            <i class="fa fa-registered" ></i>
            <a href="/register" @click="register()"><span></span>Register With Us</a>
        </div>
      </div>
      <div class="footer-right">
        <h2>Get In Touch</h2>
        <p>#30 abc Moi Ave, Nairobi City<i class="fa fa-map-marker"></i></p>
        <p>example@jirani.com<i class="fa fa-paper-plane" ></i></p>
        <p>+254 111 001122<i class="fa fa-phone" ></i></p>
      </div>
    </div>
    <div class="social-links">
        <i class="fa fa-facebook" ></i>
        <i class="fa fa-instagram" ></i>
        <i class="fa fa-twitter" ></i>
        <i class="fa fa-youtube-play" ></i>
        <p>Developed By Lantei</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{}
    },
    methods:{
        register(){
            //Emit the the parent what to do
            this.$emit("openRegister");
        }
    }
};
</script>

<style >
.footer {
  padding: 60px 0 20px;
  background: #efefef;
}
.footer .title-text{
    padding: 0;
}
.footer-row {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-left,
.footer-right {
  flex-basis: 45%;
  padding: 10px;
  margin-bottom: 20px;
}
.footer-right{
    text-align: right;
}
.footer-left .footer-btn {
    text-align: center;
    color: black;
}
.footer-left h2{
    text-align: center;
}
.banner-btn {
  margin: 70px auto 0;
}
.footer-btn a {
  text-decoration: none;
  width: 150px;
  display: inline-block;
  margin: 0 10px;
  padding: 12px 0;
  color: black;
  border: 0.5px solid black;
  position: relative;
  z-index: 1;
  transition: color 0.5s;
}

.footer-btn a span {
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  transition: 0.5s;
}
.footer-row h2{
    margin: 10px 0;
}
.footer-row p{
    line-height: 10px;
}
.footer-right .fa{
    font-size: 20px;
    color: #823329;
    margin: 10px;

}
.social-links{
    text-align: center;
}

.social-links .fa{
    height: 40px;
    width: 40px;
    font-size: 40px;
    line-height: 40px;
    margin: 40px 5px 0;
    color: #823329;
    cursor: pointer;
    transition: .5s;
}
.social-links .fa:hover{
    transform: translateY(-7px);
}
.social-links p{
    font-size: 12px;
    margin: 20px;
}

@media screen and (max-width: 770px){
    .footer-left, .footer-right{
        flex-basis: 100%;
        font-size: 14px;
    }

}
</style>