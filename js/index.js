var button = document.getElementById('open');
 var close = document.getElementById('close');
 var modal = document.getElementById('modal');
 button.addEventListener('click', function (event) { 
 event.preventDefault(); 
 modal.setAttribute("class","modal-show");
 modal.classList.replace("modal","modal-show");
 }); 
 close.addEventListener('click', function (event) { 
 event.preventDefault(); 
 modal.classList.replace("modal-show","modal");
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

 //alert(update);
 /* swich between login and sign up*/
 /*go from sign up to login*/
 

 
 let go_account= document.getElementById("go-account");
 let login=document.getElementById("login-parent");
 go_account.addEventListener("click",function(e){
  
   model_sing_up.style.display="none";
   login.style.display="block";


 })
 /*go from login to sign up*/
 let createAccount=document.getElementById("create-account");
 createAccount.addEventListener("click",function(e)
 {
   model_sing_up.style.display="block";
   login.style.display="none";
 });
 /* close login and return to index page body*/
 var closeLogin = document.getElementById('close-login');
 closeLogin.addEventListener('click', function (event) { 
    event.preventDefault(); 
    login.style.display = 'none';
 });

 
function calculateOffer()
{
    var x=document.getElementsByClassName("offer");
    const sec=1000;
    const min=sec*60;
    const hours=min*60;
    const d=hours*24;
    for(var i=0 ; i<x.length ;i++ )
    {
    
     offer_date=x[i].getAttribute("data-offer");
     const update= new Date(offer_date).getTime();
     const current_time=new Date().getTime();
     const diffTime=update-current_time;
     const remainDay=Math.floor(diffTime/d);
     const remainHours=Math.floor((diffTime%d)/hours);
     const remainMin= Math.floor((diffTime%hours)/min);
     const remainSecond= Math.floor((diffTime%min)/sec);

     x[i].innerHTML =remainDay +"ايام  - "+remainHours +"  ساعات - "+remainMin +" ودقائق- "+remainSecond +"ثواني";
    }
}
 function myFunction()
 {
    setInterval(calculateOffer, 1000);
     
 }
 // multi langauge in javascrip
 function langfun(language){
   
   if(language=="ar")
   {
     var arbic=document.getElementById("ar");
     var english=document.getElementById("en");
     arbic.style.display="none";
     english.style.display="block";
     english.style.textAlign="left";
    
   }
   else
   {
    var arbic=document.getElementById("ar");
    var english=document.getElementById("en");
    arbic.style.display="block";
    english.style.display="none";
    arbic.style.textAlign="right";

   }


 }