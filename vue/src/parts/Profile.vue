<template>
    <div class="card profile-card">
                    <div class="card-title">
                        <img src="images/big/Rectangle 3.jpg" alt="">
                        <div class="d-flex flex-row absolute r-30 t-20">
                            <a role="button" class="edit  m-r-10" href="/">
                                Edit profile
                            </a>
                            <a role="button" class="more p-x-10" href="/">
                                <img src="images/icons/more-horizontal.svg" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="card-text p-l-30 p-r-30">
                        <img class="profile-photo" src="images/thumbs/Ellipse.png" alt="Dmitry Kargaev">
                        <div class="d-flex flex-column m-l-20">
                            <div class="d-flex justify-between">
                                <h2>
                                    Dmitry Kargaev
                                    <img class="" src="images/logos/linkedin-sepia.svg" alt="">
                                </h2>
                                <div class="location">
                                    Saint Petersburg, Russian Federation
                                </div>
                            </div>
                            <p class="p-t-15 p-b-15">
                                Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and
                                creative projects. Open to offers.
                            </p>
                            <div class="some-grid-2">
                                <button class="custom-button m-r-15">Contact info</button>
                                <button class="custom-button">1,043 connections</button>
                            </div>
                        </div>
                    </div>
                </div><!-- /.profile-card-->
</template>
<script>
export default {
  name: 'Profile',
  props: {
  }
}
</script>
