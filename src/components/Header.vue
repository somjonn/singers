<template>
<div class="">
   <nav class="nav">
      <li><router-link to="/">Home page</router-link></li>
      <li><router-link to="/singers">Singers page</router-link></li>
      <li><router-link to="/webplayer">Webplayer</router-link></li>
      <li><router-link to="/about">About</router-link></li>
   </nav>

</div>

</template>


<script>
export default {
   name: 'Header'
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

.nav{
   background-color: #0d0d0d;
   display: flexbox;
   overflow: hidden;
   align-items: center;
   text-align: center;
   justify-content: center;
   text-decoration: none;
   border: none;
}

.nav a{
   float: left;
   color: #fff;
   padding: 14px 16px;
   font-size: 17px ;
}

li{
   display: inline-block;
   padding: 5px;

}

a:hover{
   color: #e4002b;
}
a{
   text-decoration: none;
}

a.router-link-active, li.router-link-active>a {
   color: #e4002b;
   text-decoration: underline;
}




</style>