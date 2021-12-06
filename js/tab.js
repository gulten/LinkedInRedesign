class Tab {
    constructor(...items) {
        this.items = items[0];
        this.tabButtonList = document.querySelectorAll(this.items.buttonParent + ' ' + this.items.tabButtonElement);
        this.tabContentList = document.querySelectorAll(this.items.tabs);
        this.tabButtonList.forEach(el => el.addEventListener('click', this.tabClick.bind(this)));
    }
    tabClick(event) {
        event.preventDefault();
        this.activeTab = event.target.getAttribute('data-tabName');
        this.removeActive();
        this.addActive();
        
    }
    removeActive() {
        this.tabButtonList.forEach(el => el.classList.remove("active"));
        this.tabContentList.forEach(el => el.classList.remove("active"));
    }
    addActive() {
        let tabList = document.querySelectorAll(this.items.buttonParent + ' ' + '[data-tabName="' + this.activeTab + '"]');
        tabList.forEach(el => el.classList.add("active"));
        
        tabList = document.querySelectorAll(this.items.tabs + '[data-tabName="' + this.activeTab + '"]');
        tabList.forEach(el => el.classList.add("active"));
    }
}