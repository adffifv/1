// script.js  
let currentImageIndex = 1;  
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];  
  
function changeImage(index) {  
    currentImageIndex = index;  
    document.getElementById('largeImg').src = images[index - 1];  
}  
  
function toggleBrightness() {  
    const img = document.getElementById('largeImg');  
    const filter = img.style.filter;  
    img.style.filter = filter === 'brightness(0.7)' ? '' : 'brightness(0.7)';  
}