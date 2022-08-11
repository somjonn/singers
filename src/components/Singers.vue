<template>
<Header />
<header>
   <h1>Singers</h1>
</header>
<div class="container">
   <section class="section" id="singer">
      <div class="row">
         <div class="singer"> 
            <div class="photo"> <img src="./../../photo/singers/av.jpg"> </div>
            <div class="info">
               Tim Bergling <br/>
               <br/>
               8 September 1989 <br/>- <br/>20 April 2018 <br/>(age 29) <br/>
               <br/>
               Stockholm, Sweden <br/>
               <br/>
               EDM, progressive house, electro house
               <br/>
               <br/>
               2006–2018
            </div>
         </div>
         <div class="singer">
            <div class="photo"> <img src="./../../photo/singers/jile.jpg"></div>
            <div class="info">
               Julie Bergan <br/>
               <br/>
               <br/>
               12 April 1994 <br/>
               (age 28) <br/>
               <br/>
               Skien, Norway <br/>
               <br/>
               <br/>
               Dance-pop, electronic, hip hop
               <br/>
               <br/>
               2012–present
            </div>
         </div>
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/txx.jpg"> </div>
            <div class="info">
               Andreas Andresen Haukeland <br/>
               <br/>
               <br/>
               12 April 1993 <br/>
               (age 29) <br/>
               <br/>
               Bærum, Norway <br/>
               <br/>
               <br/>
               Pop, EDM, Russ music
               <br/>
               <br/>
               2012–present
            </div>
            </div>
      </div>
      <div class="row">
         <div class="singer">
            <div class="photo"> <img src="./../../photo/singers/gilli.jpg"> </div>
            <div class="info">
               Kian Rosenberg <br/> 
               Larsson <br/>
               <br/>
               <br/>
               27 June 1992 <br/>
               (age 30)<br/>
               <br/>
               Rødovre, Denmark <br/>
               <br/>
               <br/>
               Rapper
               <br/>
               <br/>
               2010–present
            </div>
         </div>
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/ch1.jpg"> </div>
            <div class="info">
               Adam Richard Wiles <br/>
               <br/>
               <br/>
               17 January 1984 <br/>
               (age 38) <br/>
               <br/>
               Dumfries, Scotland <br/>
               <br/>
               <br/>
               EDM, electro house, electropop, dance-pop
               <br/>
               <br/>
               1999–present
            </div>
         </div>
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/dg.jpg"> </div>
            <div class="info">
               Pierre David Guetta <br/>
               <br/>
               <br/>
               7 November 1967 <br/>(age 54)<br/>
               <br/>
               Paris, France <br/>
               <br/>
               <br/>
               <br/>
               EDM, house, dance-pop
               <br/>
               <br/>
               1986–present
            </div>
         </div>
      </div>
      <div class="row">
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/fm.jpg"> </div>
            <div class="info">
               Karim Kharbouch <br/>
               <br/>
               <br/>
               November 9, 1984 <br/>
               (age 37) <br/>
               <br/>
               Casablanca, Morocco <br/>
               <br/>
               <br/>
               <br/>
               Rapper
               <br/>
               <br/>
               2002–present
            </div>
         </div>
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/aw.jpg"> </div>
            <div class="info">
               Alan Olav Walker <br/>
               <br/>
               <br/>
               24 August 1997 (age 24)<br/>
               <br/>
               Bærum, Norway <br/>
               <br/>
               <br/>
               <br/>
               electro house, future, EDM
               <br/>
               <br/>
               2012–present
            </div>
         </div>
         <div class="singer">
            <div class="photo"><img src="./../../photo/singers/mgk.jpg"> </div>
            <div class="info">
               Colson Baker<br/>
               <br/>
               <br/>
               April 22, 1990  <br/>
               (age 32) <br/>
               <br/>
               Houston, Texas, U.S. <br/>
               <br/>
               <br/>
               Hip hop, pop rap, rap, rock, pop, punk
               <br/>
               <br/>
               2012–present
            </div>
         </div>
      </div>
   </section>
</div>
<Footer/>
</template>


<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
   name: 'Singers',
   components : {
   Header,
   Footer,
   },
}




</script>


<style scoped>
.container{
   display: flex;
   justify-content: center;
}
header{
   display:flex;
   justify-content: center;
   align-items: center;
   padding:15px;
   font-family: faze2;
   font-size: 30px;
}
.row{
   width: 1200px;
   display: flex;
   justify-content: space-between;
   margin-top:10px;
   padding-bottom: 20px;
}
.singer{
   background-color: #fff;
   width: 300px;
   height: 500px;
   padding-bottom: 2px;
}

.photo{
   display: flex;
   position: absolut;
   justify-content: center;
}

img{
   width: 250px;
   height: 250px;
   }


   .info{
      display: flex;
      justify-content:center;
      text-align: center;
      font-size: 16px;
      padding-top:30px;
      color: black;
   }


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
</style>