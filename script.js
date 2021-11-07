window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementById("rotate");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

const clickableImgs = document.querySelectorAll(".card-image-top")

clickableImgs.forEach(img => img.onclick = e => img.classList.toggle("big-img"))
