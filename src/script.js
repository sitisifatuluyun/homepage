// Script untuk slideshow
let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Ganti gambar setiap 4 detik (lebih lambat dari sebelumnya)
}

