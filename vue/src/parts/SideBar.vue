<template>
    <div class="sidebars">
        <div class="sidebar card">
            <div class="card-title custom-border-bottom p-b-20 d-flex flex-row justify-between">
                <h6>your dashboard</h6>
                <a href="/">go to stats</a>
            </div>
            <div class="card-text flex-column d-align-start justify-start">
                <div class="info-panel">
                    <div class="count-info">
                        367
                    </div>
                    <p>
                        views today
                    </p>
                </div>
                <div class="info-panel">
                    <div class="count-info">
                        15
                    </div>
                    <p>
                        posts views
                    </p>
                </div>
                <div class="info-panel">
                    <div class="count-info">
                        9
                    </div>
                    <p>
                        search appereances
                    </p>
                </div>
            </div>

        </div>
        <div class="sidebar card m-t-20 bg-color">
            <div class="card-title custom-border-bottom p-b-20 d-flex flex-row justify-between">
                <h6>visitors</h6>
                <a href="/">view all</a>
            </div>
            <div class="card-text flex-column d-align-start justify-start">
                <div class="content-panel">
                    <img src="images/small/Photo.png" alt="">
                    <div class="content">
                        Darlene Black
                        <p class="content-text">
                            HR-manager, 10 000 connec...
                        </p>
                    </div>
                </div>
                <div class="content-panel">
                    <img src="images/small/Photo-2.png" alt="">
                    <div class="content">
                        Darlene Black
                        <p class="content-text">
                            HR-manager, 10 000 connec...
                        </p>
                    </div>
                </div>
                <div class="content-panel">
                    <img src="images/small/Photo-3.png" alt="">
                    <div class="content">
                        Darlene Black
                        <p class="content-text">
                            HR-manager, 10 000 connec...
                        </p>
                    </div>
                </div>
                <div class="content-panel">
                    <img src="images/small/Photo-4.png" alt="">
                    <div class="content">
                        Darlene Black
                        <p class="content-text">
                            HR-manager, 10 000 connec...
                        </p>
                    </div>
                </div>
                <div class="content-panel">
                    <img src="images/small/Photo-5.png" alt="">
                    <div class="content">
                        Darlene Black
                        <p class="content-text">
                            HR-manager, 10 000 connec...
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar card m-t-20 bg-color">
            <div class="card-title custom-border-bottom p-b-20 d-flex flex-row justify-between">
                <h6>You may like these courses</h6>
            </div>
            <div class="card-text flex-column d-align-start justify-start">
                <a class="content-panel" href="/">
                    <img src="images/thumbs/Photo.jpg" alt="">
                    <span class="play"></span>
                    <div class="content">
                        UX Foundations:
                        Prototyping
                        <p class="content-text">
                            27,959 viewers
                        </p>
                    </div>
                </a>
                <a class="content-panel" href="/">
                    <img src="images/thumbs/Photo-2.jpg" alt="">
                    <span class="play"></span>
                    <div class="content">
                        UX Foundations:
                        Prototyping
                        <p class="content-text">
                            27,959 viewers
                        </p>
                    </div>
                </a>
                <a class="content-panel" href="/">
                    <img src="images/thumbs/Photo-3.jpg" alt="">
                    <span class="play"></span>
                    <div class="content">
                        UX Foundations:
                        Prototyping
                        <p class="content-text">
                            27,959 viewers
                        </p>
                    </div>
                </a>
                <a class="content-panel active-text upper-case m-t-30 p-t-0 custom-font-size" href="/">
                    See all recomendations
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SideBar',
  props: {
  }
}
</script>