<template>
    <header>
        <div class="container-grid-full-3 bg-color-white">
            <h1 class="logo">
                <img src="/images/logos/linkedin.svg" alt="LinkedIn Logo">
            </h1>
            <div class="container-grid-custom-2 no-grid-gap">
                <div class="container-md custom-border-left custom-border-right">
                    <ul class="top-nav">
                        <li>
                            <a href="">
                                <img src="/images/icons/rss.svg" alt="">
                                FEED
                            </a>
                            <ul>
                                <li><a href="">ITEM - 1</a></li>
                                <li><a href="">ITEM - 2</a></li>
                                <li><a href="">ITEM - 3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">
                                <img src="/images/icons/users.svg" alt="">
                                NETWORK
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/images/icons/briefcase.svg" alt="">
                                JOBS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/images/icons/message-square.svg" alt="">
                                CHAT
                                <span class="badge">1</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/images/icons/rss.svg" alt="">
                                NOTICES
                            </a>
                        </li>
                    </ul>
                    <div class="search-box">
                        <label for="search"><img src="/images/icons/search.svg" alt=""></label>
                        <input type="text" name="search" id="search" placeholder="Search">
                    </div>
                </div>
                <div class="profile-box-min">
                    <img src="/images/thumbs/Rectangle-profile.png" alt="">
                    <div class="info">
                        <span class="title">D. Kargaev</span>
                        <span class="title-passive">YOU</span>
                        <span class="detail">367 views today</span>
                        <a class="detail-link" href="/">+32</a>
                    </div>
                </div>
            </div><!-- /.auto-grid-3 -->
            <ul class="top-nav justify-start p-l-0 p-r-0">
                <li>
                    <a class="custom-border-right" href="/">
                        <img src="/images/icons/more-horizontal-2.svg" alt="">
                        OTHER
                    </a>
                </li>
            </ul>
        </div><!-- /.container-grid-full-->
    </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>