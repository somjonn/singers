<template>
<preloader/>
  <router-view />
</template>


<script>
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default{
  name:'App',
  components : {
    Preloader,
    Header,
    Footer,
  }
}

</script>


<style>
body{
  background-color: #0d0d0d;
  align-items: center;
  justify-content: center;
  color:#e4002b
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
