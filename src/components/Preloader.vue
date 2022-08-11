<template>
   <transition name="fade">
      <div v-if="show" class="preloader">
         <p>Loading...</p>
         <span class="pre-author">Powered by <span class="somjonn2">somjonn</span> <br/> by using <span class="spotify">Spotify</span></span>
      </div>
   </transition>
</template>



<script>
export default {
   name: 'preloader',
   data(){
      return{
         show: true,
      }
   },
   mounted(){
      this.showToggle()
   },
   methods: {
      showToggle(){
         setTimeout(() =>{
            this.show = false
         }, 1000 )
      }
   }
}
</script>



<style>
   .preloader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 105%;
      background-color: #0d0d0d;
      font-size: 100px;
      font-family: faze2;
      z-index: 999;
   }

   p{
      font: 600;
      margin-top: 1rem;
   }
   .pre-author{
      padding-top: 600px;
      font-size: 20px;
      font-family: faze;
   }
   .somjonn2{
      font-size: 30px;
   }


.fade-enter-active {
   transition: opacity 1s;
}

.fade-leave-active{
   transition: opacity 1s;
}

.fade-enter{
   opacity: 0;
}
.fade-leave-to{
   opacity: 0;
}
</style>