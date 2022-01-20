
function finishShoping(){
     
    document.getElementById("container-body-checkout").style.display="none";
    document.getElementById("stepper").style.display="block";

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
    }   
    
    function nextStep()
    {
      /* if (step === 0) {
          step++;
        }
        */
        const elementID =stepElements[step].getAttribute("data-step");
        console.log("step "+ step);
        console.log("data-step "+elementID);
        const nextElemnt=stepElements[step+1].getAttribute("data-step");
        
        document.getElementById(nextElemnt).style.display="block";
        
        document.getElementById(elementID).style.display="none";

        stepElements[step+1].classList.add('is-active');
         
        step = step >= stepElements.length - 1 ? step : ++step;
    }
    
    function userInfo()
    {
       let element=document.getElementById("step-one");
       element.style.display="none";


    }