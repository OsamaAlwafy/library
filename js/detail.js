

// slidar implementation
var slideIndex = 1;
showSlides();

function plusSlides(n) {
  slideIndex =slideIndex+n;
  showSlides();
}

function currentSlide(n) {
  slideIndex=n;
  showSlides();
  
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setInterval(()=>{
  slideIndex++;
  showSlides();

},3000);

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var imageSmall1=document.getElementById("myImg-small");
var imageSmall2=document.getElementById("myImg-small2");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
function showImgeBooks(n)
{
    if(n==1)
    {
        var img =document.getElementById("myImg");
        var img2 =document.getElementById("myImg2");
        var imageShow=document.getElementById("img01");
         imageShow.setAttribute("src",img.getAttribute("src"));
         imageSmall1.style
       
         
    }
    else {
        var img =document.getElementById("myImg");
        var img2 =document.getElementById("myImg2");
        var imageShow=document.getElementById("img01");
        imageShow.setAttribute("src",img2.getAttribute("src"));
        
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}