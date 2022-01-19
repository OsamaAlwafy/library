
// responsive list
var button = document.getElementById('open');
 var close = document.getElementById('close');
 var modal = document.getElementById('modal');
 button.addEventListener('click', function (event) { 
 event.preventDefault(); 
 modal.style.display = 'block'; 
 }); 
 close.addEventListener('click', function (event) { 
 event.preventDefault(); 
 modal.style.display = 'none'; 
 });

 
 var model_sing_up=document.getElementById("model-sign-up");
 var sinup_bottun=document.getElementById("sing-up");

 sinup_bottun.addEventListener("click",function(event){
     event.preventDefault();
   //model_sing_up.classList.toggle("is-open");
   model_sing_up.style.display="block";

 });
 var close_sing_up = document.getElementById('close-sing-up');
 close_sing_up.addEventListener('click', function (event) { 
    event.preventDefault(); 
    model_sing_up.style.display = 'none';
 });



// slidar implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
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
        img.style.display="none";
         img2.style.display="block";
    }
    else {
        var img =document.getElementById("myImg");
        var img2 =document.getElementById("myImg2");
        var imageShow=document.getElementById("img01");
        imageShow.setAttribute("src",img2.getAttribute("src"));
        img.style.display="block";
         img2.style.display="none";
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}