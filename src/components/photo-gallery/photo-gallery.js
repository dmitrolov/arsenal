import "./photo-gallery.sass"

import "../../../assets/img/photo-gallery/about1.webp"
import "../../../assets/img/photo-gallery/about2.webp"
import "../../../assets/img/photo-gallery/about3.webp"
import "../../../assets/img/photo-gallery/about4.webp"
import "../../../assets/img/photo-gallery/about5.webp"
import "../../../assets/img/photo-gallery/about6.webp"
import "../../../assets/img/photo-gallery/about7.webp"
import "../../../assets/img/photo-gallery/about8.webp"
import "../../../assets/img/photo-gallery/about9.webp"
import "../../../assets/img/photo-gallery/about10.webp"
import "../../../assets/img/photo-gallery/about11.webp"

$('.photo-gallery-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 1,
})