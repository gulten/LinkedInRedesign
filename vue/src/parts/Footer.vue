<template>
    <footer class="m-t-40 p-t-30">
        <div class="container-grid-full-1">
            <div class="container-grid-custom-2">
                <div class="left d-flex flex-row justify-between">
                    <a href="" class="footer-logo d-flex flex-column">
                        <img src="images/logos/linkedin.svg" alt="">
                        <div>Linked<span class="active-text">In</span></div>
                    </a>
                    <div class="nav-bottom">
                        <span class="bold m-b-20">Navigation</span>
                        <div class="d-flex flex-row">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Small Business</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Talent Solutions</a></li>
                                <li><a href="#">Marketing Solutions</a></li>
                                <li><a href="#">Sales Solutions</a></li>
                                <li><a href="#">Safery Center</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Community Guidelines</a></li>
                                <li><a href="#">Privacy & Terms</a></li>
                                <li><a href="#">Mobile App</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-button">
                        <span class="bold m-b-20">Fast access</span>
                        <button class="custom-button icon icon-question align-left">Questions?</button>
                        <button class="custom-button icon icon-setting align-left m-t-10">Settings</button>
                    </div>
                </div>
                <div class="right">
                    <div class="select-lang d-flex flex-column">
                        <span class="bold m-b-20">Language</span>
                        <select class="custom-select" name="" id="">
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>
