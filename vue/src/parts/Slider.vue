<template>
    <div class="card splitted-content-card projects-card m-t-20">
                    <div class="card-title">
                        Projects <span>3 of {{ items.length }}</span>
                    </div>
                    <div class="card-text">
                        <div id="slider" class="slider">
                            <div class="arrow-left">&#60;</div>
                            <div class="arrow-right">&#62;</div>
                            <ul>
                                <li v-for="(item, index) in items" :key="index" class="active">
                                    <img :src="item.image" alt="">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="text">{{ item.text }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-action m-b-30">
                        <a class="bold upper-case active-text" href="/">Show ALL (12)</a>
                    </div>
                </div><!-- /.projects-card-->
</template>
<script>
export default {
  name: 'Slider',
  props: ['items']
}
</script>