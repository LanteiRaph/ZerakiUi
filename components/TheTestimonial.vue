<template>
  <div class="testimonial">
    <div class="title-text">
      <p>Testimonials</p>
      <h1>Our Client Say's</h1>
    </div>
    <div class="testimonial-row">
      <div class="testimonial-column">
          <div class="user">
              <img src="~/assets/user3.jpg" alt="">
              <div class="user-info">
                  <h4>Kevin Mwangi <i class="fa fa-twitter"> </i></h4>
                  <small>@KevMwangi</small>
              </div>
          </div>
        <p>
          Creature form form open them void was thing unto seasons sixth upon
          creepeth life made also signs may to gathered darkness two lesser
          cattle day appear. Doesn't so first place. Air heaven had. Let fruit
          stars made great second. Face sea appear were have. Waters dominion.
          Spirit there was their own brought. Bring god night Make first was for
          saying. Creature beast itself land whose abundantly.
        </p>
      </div>
      <div class="testimonial-column">
          <div class="user">
              <img src="~/assets/user1.jpg" alt="">
              <div class="user-info">
                  <h4>Pter Kenneth <i class="fa fa-twitter"> </i></h4>
                  <small>@Pkenneth</small>
              </div>
          </div>
           <p>
          Creature form form open them void was thing unto seasons sixth upon
          creepeth life made also signs may to gathered darkness two lesser
          cattle day appear. Doesn't so first place. Air heaven had. Let fruit
          stars made great second.
        </p>
      </div>
      <div class="testimonial-column">
          <div class="user">
              <img src="~/assets/user1.jpg" alt="">
              <div class="user-info">
                  <h4>Alan Paul <i class="fa fa-twitter"> </i></h4>
                  <small>@paulAlan</small>
              </div>
          </div>
           <p>
          Creature form form open them void was thing unto seasons sixth upon
          creepeth life made also signs may to gathered darkness two lesser
          cattle day appear. Doesn't so first place. Air heaven had. Let fruit
          stars made great second. Face sea appear were have. Waters dominion.
          Spirit there was their own brought. Bring god night Make first was for
          saying. Creature beast itself land whose abundantly.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.testimonial {
  width: 100%;
  padding: 70px 0;
}
.testimonial-row{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
.testimonial-column{
    flex-basis: 28%;
    padding: 10px;
    margin-bottom: 30px;
    border-radius:5px;
    box-shadow: 0 7px 20px 2px #d68c83; 
    cursor: pointer;
    transition: transform .5s;
}
.testimonial-row p{
    font-size: 14px;
}
.user{
    display: flex;
    align-items: center;
    margin: 20px 0;
}

.user img{
    width: 40px;
    margin-right: 20px;
    border-radius: 3px;
}

.user-info .fa{
    margin-left: 10px;
    color: #27c0ff;
    font-size: 20px;
}
.user-info small{
    margin: 0;
    color: #b8594d;
}
h4{
    margin: 0;
}
.testimonial-column:hover{
    transform: translateY(7px);
}
@media screen  and (max-width: 770px){
      .testimonial-column{
          flex-basis: 100%;
      }
}
</style>