<template>
  <div id="app">
    <Header></Header>
    <div class="container-grid-full-1 m-t-40">
        <div class="container-grid-custom-2">
            <div class="left">
              <Profile></Profile>
              <Tabs></Tabs>
              <slider :items="slideList" />
              <Content></Content>
            </div>
            <div class="right">
              <side-bar></side-bar>              
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './parts/Header.vue';
import Profile from './parts/Profile.vue';
import SideBar from './parts/SideBar.vue';
import Tabs from './parts/Tabs.vue';
import Slider from './parts/Slider.vue';
import Content from './parts/Content.vue';
import Footer from './parts/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Profile,
    SideBar,
    Tabs,
    Slider,
    Content,
    Footer
  },
  data: function () {
    return {
      slideList: [
        {
          image : "images/thumbs/ext.jpg",
          title: "Zara redesign concept",
          text: "UX/UI design, 15.07.2019"
        },
        {
          image : "images/thumbs/ext-2.jpg",
          title: "SCTHON event brand identity",
          text: "raphic design, 03.31.2019"
        },
        {
          image : "images/thumbs/ext-3.jpg",
          title: "Drozd. Brand identity. 2016",
          text: "Graphic design, 03.04.2016"
        }
      ]
    }
  }
}
</script>
<style>
  @import '../../dist/css/main.css';
</style>