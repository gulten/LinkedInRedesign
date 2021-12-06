class Slider {
    constructor(...items) {
        this.items = items[0];
        this.slider = document.querySelector(this.items.element);
        this.sliderUL = document.querySelector(this.items.element + ' ul');
        this.sliderLiArray = document.querySelectorAll(this.items.element + ' ul li');
        this.leftElement = document.querySelector(this.items.element + ' ' + this.items.leftButton);
        this.rightElement = document.querySelector(this.items.element + ' ' + this.items.rightButton);
        this.leftElement.addEventListener('click', this.leftClick.bind(this));
        this.rightElement.addEventListener('click', this.rightClick.bind(this));
        this.startIndex = 0;
        this.endIndex = 2;
    }
    get thumbList() {
        return document.querySelectorAll(this.items.element + ' ul li.active');
    }
    leftClick(event) {
        event.preventDefault();
        if (this.sliderLiArray.length > 3) {
            if (this.startIndex > 0) {
                this.startIndex--;
                this.sliderLiArray[this.startIndex].classList.add("active");
                this.sliderLiArray[this.endIndex].classList.remove("active");
                this.endIndex--;
            }
        }    
    }
    rightClick(event) {
        event.preventDefault();
        if (this.sliderLiArray.length > 3) {
            if (this.endIndex < this.sliderLiArray.length-1) {
                this.endIndex++;
                this.sliderLiArray[this.endIndex].classList.add("active");
                this.sliderLiArray[this.startIndex].classList.remove("active");
                this.startIndex++;
            }
        }   
    }
}