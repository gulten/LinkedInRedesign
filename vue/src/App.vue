<template>
  <div id="app">
    <Header></Header>
    <div class="container-grid-full-1 m-t-40">
        <div class="container-grid-custom-2">
            <div class="left">
              <Profile></Profile>
              <Tabs></Tabs>
              <Slider></Slider>
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
  }
}
</script>
<style>
  @import '../../dist/css/main.css';
</style>