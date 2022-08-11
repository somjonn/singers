<template>
<Header />
<div class="slider">
      <carousel 
      @next="next"
      @prev="prev"
   >
      <carousel-slide 
         v-for="(slide, index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide = "visibleSlide"
            :direction = "direction"
         >
            <img :src="slide" />
      </carousel-slide>
   </carousel>
</div>

<div class="singers-page">
   <div class="show-more">
      <div class="singers-singers">Singers</div>
      <div class="button">
         <router-link class ="singer-button" to="/singers" tag="button"> <span class="btn-show"> Show more </span></router-link>
      </div>
   </div>
   <div class="singers-photo">
      <img src="./../../photo/singers/mainaw.jpg">
      <img src="./../../photo/singers/maingilli.jpg">
      <img src="./../../photo/singers/mainri.jpg">
      <img src="./../../photo/singers/mainshakira.jpg">
      <img src="./../../photo/singers/maints.jpg">
   </div>
</div>

<div class="web-player">
   <div class="show-more">
      <div class="web-web">Web player</div>
      <div class="button-wb">
         <router-link class ="singer-button-wb" to="/webplayer" tag="button"> <span class="btn-wb-show"> play </span></router-link>
      </div>
   </div>
</div>
<Footer/>
</template>


<script>
import Header from './Header.vue';
import Carousel from'./Carousel.vue';
import CarouselSlide from'./CarouselSlide.vue';
import Footer from './Footer.vue'


export default{
   name: 'Home',
   data(){
      return{
         slides:[
            './photo/juliebergan.PNG',
            './photo/calvinharris.PNG',
            './photo/avicii.PNG',
            './photo/tixtix.PNG',
         ],
         visibleSlide: 0,
         direction: 'left',
      }
   },
   computed:{
      slidesLen(){
      return this.slides.length;
   },
   },
   methods: {
      next(){
      if(this.visibleSlide >= this.slidesLen - 1){
         this.visibleSlide = 0;
      } else{
         this.visibleSlide++;
      }
      this.direction = "left";
      },
      prev(){
      if(this.visibleSlide <= 0) {
         this.visibleSlide = this.slidesLen - 1;
      }else {
         this.visibleSlide--;
      }
      this.direction = "right";
      }
   },
   components : {
      Header,
      Footer,
      Carousel,
      CarouselSlide,
   },
}
</script>

<style scope>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
@font-face {
   font-family: 'faze';
   src: url(/fonts/batman/batmfa__.woff) format("woff");
   font-weight: 400;
}
@font-face {
   font-family: 'faze2';
   src: url(/fonts/batman/batmfo__.woff) format("woff");
   font-weight: 400;
}

body {
   font-family: "faze", sans-serif;
   justify-content: center;
   align-items: center;
   background-color: #0d0d0d;
}
header{
   justify-content: center;
   align-items: center; 
}

.slider {
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 30px;
}

.singers-page {
   width: 870px;
   text-align: center;
   margin: 0 auto;
   padding-bottom: 60px;
}
.show-more {
   display: flex;
   justify-content: space-between;
   text-align: right;
}
.singers-singers{
   display: flex;
   align-items: center;
   font-size: 60px;
   font-family: faze2;
}

.singers-photo {
   display: flex;
   padding-top: 15px;
}
.singers-photo img {
   height: 200px;
}

.button{
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: #fff;
   text-decoration: none;
}

.btn-show{
   color: #e4002b;
   text-decoration: none;
   border: 2px solid #e4002b;
   padding: 18px 24px;
   text-decoration-line: none;
   text-underline-offset: none;
}
.btn-show:hover{
   color: #fff;
   text-decoration: none;
   border: 2px solid #e4002b;
   background-color: #e4002b;

}


.web-player{
   width: 870px;
   text-align: center;
   margin: 0 auto;
   background-color: #e4002b;
   color:#fff; 
}
.web-web{
   display: flex;
   align-items: center;
   font-size: 60px;
   font-family: faze;
   margin:15px 15px;
}
.button-wb{
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: #fff;
   text-decoration: none;
   margin:15px 15px;
}

.btn-wb-show{
   color: #fff;
   text-decoration: none;
   border: 2px solid #fff;
   padding: 18px 24px;
   text-decoration-line: none;
   text-underline-offset: none;
}
.btn-wb-show:hover{
   color: #e4002b;
   text-decoration: none;
   background-color: #fff;

}

</style>

