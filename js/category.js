
const book = new Map();

var hideBooksContainer=document.getElementById("books");
// return all books with details in page
const elementbook=document.getElementsByClassName("book-offer");
//var input="المعيلة";

// div we set all element of result search
let result_search =document.getElementById("result-serach");
let textInputSearch=document.getElementById("search-field");
for(var i=0 ; i<elementbook.length;i++)
{
    var name_book =elementbook[i].children[2].innerText;
    var index_book=i; 
    book.set(name_book,index_book);
}

textInputSearch.addEventListener("keyup", function(e){
  if(e.code=="Enter")
  {
      searchfun();
  }
});

function searchfun()
{

hideBooksContainer.style.display="none";
book.forEach (function(value, key) {
       if(key==textInputSearch.value)
        {
             result_search.appendChild(elementbook[value]);
        }  
  });
}


/*add counter to basket  */
let counterSpan=document.getElementById("counter");
let count=0;
let basketElement=document.getElementsByClassName("add-to-basket");
for(let i=0 ;i<basketElement.length ;i++)
{
  basketElement[i].addEventListener("click",function(e)
  {   
      if(counterSpan.style.display=="none")
      {
        counterSpan.style.display="inline-block";
      }
      count++;
      counterSpan.innerText=count;

  });
}
/* fillter by price slider */
var isDown=false;
var offset = [0,0];
var diff=0;
var showValuePrice=document.getElementById("show-price");

let silderRight=document.getElementById("slider-right");
//alert(silderRight.getBoundingClientRect().left);
let farway=silderRight.offsetLeft;
var persentageprice=150/farway;
let parent=document.getElementsByClassName("price-range")[0];
parent.addEventListener('mousedown', function(e) {

   //farway=silderRight.offsetLeft;
  
  isDown = true;
  offset = [
    -silderRight.getBoundingClientRect().left + e.clientX,
    silderRight.offsetTop - e.clientY
  ];
}, true);

document.addEventListener('mouseup', function() {
  isDown = false;
}, true);

silderRight.addEventListener('mousemove', function(event) {
  
  event.preventDefault();
   
  if (isDown &&silderRight.offsetLeft>=0 && silderRight.offsetLeft<=farway) {
    diff=farway-silderRight.offsetLeft;
    showValuePrice.innerText=diff*persentageprice
      mousePosition = {
           
          x : event.clientX,
          y : event.clientY

      };
      silderRight.style.right = ( diff+offset[0]) + 'px';
      //silderRight.style.top  = (mousePosition.y + offset[1]) + 'px';
  }
}, true);