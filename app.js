function showImage(src) {
    var bigContainer = document.getElementById("showimg");
    var bigImage = document.getElementById('old');
    var newimg = document.getElementById("img");

    bigImage.src = src;
    bigImage.id = "old";

    bigContainer.replaceChild(bigImage, newimg);
}

function moveslide(n) {

}