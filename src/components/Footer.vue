<template>
<div class="footer">
   <div class="theme">
      Powered by <span class="somjonn">somjonn</span> <br/> by using <span class="spotify">Spotify</span>
   </div>
   <div class="contact">
      <span>My contacts: </span>
      <div class="contact-me">
         <li>somjonn@gmail.com</li>
         <li><a href="https://github.com/somjonn"><span class="link-soc">GitHub: somjonn</span></a> </li>
      </div>
   </div>
</div>
</template>


<script>

export default{
   name: 'Footer',
}
</script>


<style>
.footer{
   padding: 80px 0 30px 0;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
}

.theme {
   font-size: 20px;
   margin-right: 100px;
}

.somjonn{
   font-size: 30px;
}

.contact{
   font-size:20px;

}

.contact-me{
   display: flex;
   flex-flow: column wrap;
   color: #e4002b;
}

.link-soc{
   text-decoration-line: none;
   text-underline-offset: none;
   color: #e4002b;
}

.spotify{
   color: #1ed760;
}
</style>