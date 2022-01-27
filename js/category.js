
const book = new Map();
const bookResult=new Map();

var hideBooksContainer=document.getElementById("books");
// return all books with details in page
const elementbook=document.getElementsByClassName("book-offer");
console.log(elementbook);
//var input="المعيلة";

// div we set all element of result search
let result_search =document.getElementsByClassName("result")[0];
let textInputSearch=document.getElementById("search-field");
let empty_search=document.getElementById("empty-search");

for(var i=0 ; i<elementbook.length;i++)
{
    var name_book =elementbook[i].children[2].innerText;
    var index_book=i; 
    book.set(name_book,index_book);
}

textInputSearch.addEventListener("keyup", function(e){
  if(e.code=="Enter")
  {
    result_search.style.display="block";
    empty_search.style.display="none";
      searchfun();
  }
});

function searchfun()
{
var flag=0;
hideBooksContainer.style.display="none";
book.forEach (function(value, key) {
       console.log(value);
       if(key==textInputSearch.value)
        {   flag=1;
             
             result_search.appendChild(elementbook[value]);
             console.log("key"+ key);
             
             bookResult.set(key,value);
        }
        
  });
  if(flag==0)
        {
          empty_search.style.display="block";
           return;
        }
        result_search.style.width="auto";
        console.log(bookResult);  
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
  fulterBooksByPrice();
}, true);

silderRight.addEventListener('mousemove', function(event) {
  
  event.preventDefault();
   
  if (isDown &&silderRight.offsetLeft>=0 && silderRight.offsetLeft<=farway) {
    diff=farway-silderRight.offsetLeft;
    showValuePrice.innerText= Math.round(diff*persentageprice);
      mousePosition = {
           
          x : event.clientX,
          y : event.clientY

      };
      silderRight.style.right = ( diff+offset[0]) + 'px';
      //silderRight.style.top  = (mousePosition.y + offset[1]) + 'px';
  }
}, true);
function fulterBooksByPrice()
{
  var price=Number(showValuePrice.innerText);
  if(price==0)
    return;
   book.forEach( 
    function(value, key) {
      var bookPrice=elementbook[value].getElementsByClassName("price-book")[0].innerText;

      
      if(price<bookPrice)
      {

        elementbook[value].style.display="none";
      }
      else{
        elementbook[value].style.display="block";
      }

    });
}
// sort the search by select option

var select=document.getElementById("oreder-by-book");
select.addEventListener("change",(e)=>{

  
var option=select.value;
if(option="الاسم")
{
  var mapAsc = new Map([...book.entries()].sort());
  result_search.style.display="flex";
  hideBooksContainer.style.display="none";
  mapAsc.forEach(function(value,key){
    
    result_search.appendChild(elementbook[value]);


  });

  
}

alert(option);

});