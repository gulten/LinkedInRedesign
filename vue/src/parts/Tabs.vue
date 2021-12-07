<template>
<div>
    <div class="card tab-select-card splitted-content-card m-t-20">
        <div class="card-title">
            <button class="custom-tab active" data-tabName="profile">
                Profile
            </button>
            <button class="custom-tab" data-tabName="activity">
                Activity & interests
            </button>
            <button class="custom-tab" data-tabName="articles">
                Articles (3)
            </button>
        </div>
        <div class="card-text">

        </div>
    </div>
                
    <div class="card tabs-card splitted-content-card m-t-0 active"  data-tabName="profile">
        <div class="card-title">
            About
        </div>
        <div class="card-text p-t-15 p-b-20">
            <p>
                I'm more experienced in eCommerce web projects and mobile banking apps, but also like to
                work with creative projects,
                such as landing pages or unusual corporate websites.
            </p>
        </div>
        <div class="card-action m-b-30">
            <a class="bold upper-case active-text" href="/">See more</a>
        </div>
    </div>
    
    <div class="card tabs-card splitted-content-card m-t-0" data-tabName="activity">
        <div class="card-title">
            Activity & interests
        </div>
        <div class="card-text p-t-15 p-b-20">
            <p>
                I'm more experienced in eCommerce web projects and mobile banking apps, but also like to
                work with creative projects,
                such as landing pages or unusual corporate websites.
            </p>
        </div>
        <div class="card-action m-b-30">
            <a class="bold upper-case active-text" href="/">See more</a>
        </div>
    </div>
                
    <div class="card tabs-card splitted-content-card m-t-0" data-tabName="articles">
        <div class="card-title">
            Articles (3)
        </div>
        <div class="card-text p-t-15 p-b-20">
            <p>
                I'm more experienced in eCommerce web projects and mobile banking apps, but also like to
                work with creative projects, such as landing pages or unusual corporate websites.
            </p>
        </div>
        <div class="card-action m-b-30">
            <a class="bold upper-case active-text" href="/">See more</a>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Tabs',
  props: {
  }
}
</script>