<template>
<Header />
<header>
   <h1>About</h1>
</header>
<main class="main">
   <div class="hello">
      <span>Hej, I'm Sømjo.</span> 
      <span>My first Website by using Vue.js</span>
      <span>Website about singers </span>
      <span>all pictures were taken from <span class="spotify">Spotify</span></span>
   </div>
   <div class="about-site">
      <div class="fonts">
         font family: Batman Forever Alternate
      </div>
      <div class="colors">
         color 1: <span class="nofaze">#e4002b</span>
         color 2: <span class="nofaze">#fff</span>
         color 3: <span class="nofaze">#0d0d0d</span>
         color 4: <span class="nofaze">#1ed760</span>
      </div>
   </div>
   <div class="about-singers">
      <span class="about-title">Singers:</span> <br/>
      <br/>
      <li>Alan Walker</li>
      <li>Avicii</li>
      <li>Calvin Harris</li>
      <li>David Guetta</li>
      <li>French Monatana</li>
      <li>Gilli</li>
      <li>Julie Bergan</li>
      <li>Machine Gun Kelly</li>
      <li>Rihanna</li>
      <li>Shakira</li>
      <li>TIX</li>
   </div>
   <div class="about-songs">
      <span class="about-title">Songs:</span> <br/>
      <br/>
      <li>Julie Bergan - Were Coming Up</li>
      <li>Avicii - The Nights</li>
      <li>Calvin Harris - Summer</li>
      <li>Gilli - Orale</li>
      <li>Machine Gun Kelly - My exs best friend</li>
   </div>
</main>

<Footer/>
</template>


<script>

import Header from './Header.vue'
import Footer from './Footer.vue'
export default{
   name: 'About',
   components : {
   Header,
   Footer
   },
}
</script>


<style>
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

header{
   display:flex;
   justify-content: center;
   align-items: center;
   padding:15px;
   font-family: faze2;
   font-size: 30px;
}

.main{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
}
.hello {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   line-height: 30px;
}
.about-site {
   padding-top: 50px;
   text-align: center;
   line-height: 30px;
}
.nofaze{
   font-family: "Source Sans Pro",sans-serif;
}

.colors {
   display: block;
}

.about-singers {
   padding-top: 55px;
   text-align: center;
}
.about-singers li{
   display: block;
}

.about-songs {
   padding-top: 55px;
   
   text-align: center;
}
.about-songs li{
   display: block;
}

</style>