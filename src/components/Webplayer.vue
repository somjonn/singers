<template>
<Header />

   <header>
      <h1>Web player</h1>
   </header>
   <main>
      <section class="player">
         <div class="image"><img :src="current.image"></div>
         <h2 class="song-title"><span>{{ current.artist }}</span> - {{ current.title }} </h2>
         <div class="controls">
            <button class="prev" @click="prev">
               <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="svg-ytk21e-0 j-a-k-al-g"><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path></svg>
            </button>
            <button class="play" v-if="!isPlaying" @click="play">
<svg role="img" height="20" width="20" viewBox="0 0 16 16" class="svg-ytk21e-0 j-a-k-al-g"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
            </button>
            <button class="pause" v-else @click="pause"  >
<svg role="img" height="16" width="16" viewBox="0 0 16 16" class="svg-ytk21e-0 j-a-k-al-g"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
            </button>
            <button class="next" @click="next" >
               <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="svg-ytk21e-0 j-a-k-al-g"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path></svg>
            </button>
         </div>
      </section>
      <section class="playlist">
         <h3>The Playlist</h3>
         <button class="song-in-playlist" v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
            {{ song.artist }} - {{ song.title }}
         </button>
      </section>
      </main>
<Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
   name: 'app',
   components : {
      Header,
      Footer,
   },
   data () {
      return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
         {
            artist: 'Julie Bergan',
            title: 'Were coming up',
            src: ('./../assets/music/Julie Bergan-Were Coming Up.mp3'),
            image: ('./../../photo/singers/jbsong.jpg'),
         },
         {
            title: 'The Nights',
            artist: 'Avicii',
            src: ('./../assets/Avicii-The Nights.mp3'),
            image: ('./../../photo/singers/avsong.jpg'),
         },
         {
            title: 'Summer',
            artist: 'Calvin Harris',
            src: ('./../assets/Calvin_Harris_Summer.mp3'),
            image: ('./../../photo/singers/chsong.jpg'),
         },
         {
            title: 'Orale',
            artist: 'Gilli',
            src: ('./../assets/Gilli_Orale.mp3'),
            image: ('./../../photo/singers/gillisong.jpg'),
         },
         {
            title: 'My exs best friend',
            artist: 'Machine Gun Kelly',
            src: ('./../assets/Machine_Gun_Kelly_my_ex_s_best_friend.mp3'),
            image: ('./../../photo/singers/mgksong.png'),
         },
      ],
      player: new Audio()
      }
   },
   methods: {
      play (song) {
      if (typeof song.src != "undefined") {
         this.current = song;
         this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
         this.index++;
         if (this.index > this.songs.length - 1) {
            this.index = 0;
         }
         this.current = this.songs[this.index];
         this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
      },
      pause () {
      this.player.pause();
      this.isPlaying = false;
      },
      next () {
      this.index++;
      if (this.index > this.songs.length - 1) {
         this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
      },
      prev () {
      this.index--;
      if (this.index < 0) {
         this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
      }
   },
   created () {
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
   }
}
</script>


<style scoped>
header{
   display:flex;
   justify-content: center;
   align-items: center;
   padding:15px;
   font-family: faze2;
   font-size: 30px;
}
main {
   width: 100%;
   max-width: 900px;
   margin: 0 auto;
   padding: 25px;
}
.image{
   text-align: center;
}

.image img {
   height: 200px;
}
.song-title {
   color: #e4002b;
   font-size: 32px;
   font-weight: 700;
   text-transform: uppercase;
   text-align: center;
}
.song-title span {
   font-weight: 400;
}
.controls {
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 30px 15px;
}
button {
   background: none;
   border: none;
   outline: none;
   cursor: pointer;
}
button:hover {
   background: #fff;
   color: #e4002b;
   border:3px solid #e4002b;
}

.play, .pause {
   font-size: 20px;
   font-weight: 700;
   padding: 15px 22px;
   margin: 0px 15px;
   border-radius: 8px;
   color: #FFF;
   background-color: #e4002b;
}
.next, .prev {
   font-size: 16px;
   font-weight: 700;
   padding: 10px 20px;
   margin: 0px 15px;
   border-radius: 6px;
   color: #FFF;
   background-color: #e4002b;
}
.playlist {
   padding: 50px 30px;
   color: #e4002b;
}
.playlist h3 {
   color: #e4002b;
   font-size: 30px;
   font-weight: 800;
   margin-bottom: 30px;
   text-align: center;
   border-bottom: 1px solid #e4002b;;
}

.playlist .song {
   display: block;
   width: 100%;
   padding: 15px;
   font-size: 20px;
   font-weight: 700;
   cursor: pointer;
   color: #e4002b;
}
.playlist .song:hover {
   color: #e4002b;
}
.playlist .song.playing {
   color: #FFF;
   font-family: faze2;
   font-size: 30px;
}
.playlist .song.playing:hover{
   color: #e4002b;
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
