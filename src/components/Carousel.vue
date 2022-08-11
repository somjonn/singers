<template>
<div class="carousel">
   <slot> </slot>

   <button @click="next" class="next">&#10095;</button>
   <button @click="prev" class="prev">&#10094;</button>
</div>
</template>



<script>
export default {
   data(){
      return{
      }
   },
   methods: {
      next(){
         this.$emit('next');
      },
      prev(){
         this.$emit('prev');
      },
   },
   mounted() {
      setInterval((repeat) =>{
         this.$emit('next');
      },5000);
   }
}
</script>


<style scoped>
   .carousel{
      position: relative;
      width: 870px;
      height: 500px;
      overflow: hidden;
      
   }
   button{
      position: absolute;
      height:40px;
      width: 40px;
      top: 35%;
      color: #e4002b;
      background-color: transparent;
      border: none;
   }

   button:active, button:hover {
      outline: none;
      cursor: pointer;
      
   }
   
   .next {
      right:0;
      font-size: 40px;
   }
   .prev {
      left:0;
      font-size: 40px;
   }

</style>
