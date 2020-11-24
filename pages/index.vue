<template>
<div class="">
  <Banner />
  <Features />
  <Services />
  <Testimonials />
  <Footer />
</div>
</template>
<script>
//Import the needed module 
import Banner from '@/components/TheBanner.vue';
import Features from '@/components/TheFeature.vue';
import Services from '@/components/TheService.vue'
import Testimonials from '@/components/TheTestimonial.vue'
import Footer from '@/components/TheFooter.vue'
import Login from '@/components/TheLogin.vue'
//
export default {
  auth:false,
  name:'Home',
  components:{Banner, Features, Services , Testimonials, Footer, Login},
  data(){
    return{
      displayRegister: false
    }
  },
  methods:{
  
  }
}

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-family: 'Noto Serif', serif;
}

</style>