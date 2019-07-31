import $ from "jquery"
import './bar-menu.sass'

import './../../../assets/img/bar-menu/page1.webp'
import './../../../assets/img/bar-menu/page2.webp'
import './../../../assets/img/bar-menu/page3.webp'
import './../../../assets/img/bar-menu/page4.webp'
import './../../../assets/img/bar-menu/page5.webp'
import './../../../assets/img/bar-menu/page6.webp'
import './../../../assets/img/bar-menu/page7.webp'
import './../../../assets/img/bar-menu/page8.webp'
import './../../../assets/img/bar-menu/page9.webp'


$('.bar-menu-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    margin: 10,
});