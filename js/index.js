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
 close.addEventListener('click', function (event) { 
    event.preventDefault(); 
    model_sing_up.style.display = 'none';
 });

 

 //alert(update);
 
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

     x[i].innerHTML ="offer : Day s :"+remainDay +" Hours : "+remainHours +"Min : "+remainMin +" seconds : "+remainSecond;
    }
}
 function myFunction()
 {
    setInterval(calculateOffer, 1000);
     
 }