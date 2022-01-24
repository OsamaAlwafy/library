/*   script to detelte prodect   */
const modalDelete=document.getElementById("modal-delete");
document.getElementById("concel").addEventListener("click",function(e){
 modalDelete.style.display="none";

});

/*   imge delete icon and register to action */
const imgDelete=document.getElementsByClassName("delete-prodect");
let determineElement=null;
for(var i=0 ; i<imgDelete.length;i++)
{
  imgDelete[i].addEventListener("click",function(e){

    modalDelete.style.display="block";
    determineElement=this;
    modalDelete.style.top=+""+determineElement.parentElement.parentElement.offsetTop+
    determineElement.parentElement.parentElement.offsetHeight+"px";
  })
}



function deleteProdect( )
{
   
  determineElement.offsetParent.remove();
  modalDelete.style.display="none";
  totalPrice();
}
/* function to increase or descrease values  */
function quentity( element,sign ){
  let inputQuentity= element.parentNode.firstElementChild;
  let idSpan=inputQuentity.getAttribute("data-price");
  
  let spanElementPrice=document.getElementById(idSpan);
  let price=Number(spanElementPrice.getAttribute("data-price"));
  price 
     if(inputQuentity.value==null)
       inputQuentity.value=0;
  if(sign=="+")
  { 
    
    
    inputQuentity.value =1+ Number(inputQuentity.value);
    spanElementPrice.innerText =price* Number(inputQuentity.value);
  }
  else
  {
    if(inputQuentity.value>0)
    {
    inputQuentity.value -=1;
    spanElementPrice.innerText = price*Number(inputQuentity.value);
    }
  }
  totalPrice(); 



}
totalPrice();
function totalPrice()
{
  let allspanPrice=document.getElementsByClassName("price-data");
  let totalPrice=document.getElementById("total-price");
  var sum=0;
  for(var i=0 ;i<allspanPrice.length;i++)
  {
      sum+=Number(allspanPrice[i].innerText);
  }
  totalPrice.innerText=sum;
} 


function finishShoping(){
     
    document.getElementById("container-body-checkout").style.display="none";
    document.getElementById("stepper").style.display="block";
    document.getElementById(stepElements[0].getAttribute("data-step")).style.display="block";

}

let step = 0;
      let stepElements = document.querySelectorAll('.step__item');

      document.querySelector('.js-previews-btn').addEventListener('click', previousStep);

      document.querySelector('.js-next-btn').addEventListener('click', nextStep);
        
        // because the default step is 0 and it is active;
    function previousStep()
    {
      if (step >0) {
            stepElements[step].classList.remove('is-active');
          
          const elementID =stepElements[step].getAttribute("data-step");
        const previousElemnt=stepElements[step-1].getAttribute("data-step");
        
        document.getElementById(previousElemnt).style.display="block";
        
        document.getElementById(elementID).style.display="none";

          step = step <= 0 ? 0 : --step;
      }
      else{
        document.getElementById(stepElements[0].getAttribute("data-step")).style.display="none";
        document.getElementById("stepper").style.display="none";
        if(screen.availWidth<760)
        document.getElementById("container-body-checkout").style.display="block";
        else
        document.getElementById("container-body-checkout").style.display="flex";
      }
    }   
    
    function nextStep()
    {
       if (step < stepElements.length - 1) {
          
        
        
        const elementID =stepElements[step].getAttribute("data-step");
        console.log("step "+ step);
        console.log("data-step "+elementID);
        const nextElemnt=stepElements[step+1].getAttribute("data-step");
        
        document.getElementById(nextElemnt).style.display="block";
        
        document.getElementById(elementID).style.display="none";

        stepElements[step+1].classList.add('is-active');
         
        step = step+1;
    }
    else{

   alert("dasd00");
    }
  }
    
    function userInfo()
    {
       let element=document.getElementById("step-one");
       element.style.display="none";


    }