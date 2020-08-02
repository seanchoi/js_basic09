function generatePic() {
    var image = document.createElement('img');
    var imgAdd = document.getElementById('pic');
    image.src = "pic01.jpg";
    imgAdd.appendChild(image);
}