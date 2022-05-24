(function () 
 {
  ex1_button.addEventListener("click", function()
 {
   ex1_content.innerHTML = "0,1,2,3,4,5,6,7,8,9";
 })
   const pn = ex2_text.querySelector("Phone number");
   ex2_text.addEventListener("input", function(){
     if(ex2_text.lenght=9)
     {
       ex2_content.innerHTML = "Dobry numer";
     }
     else
     {
       ex2_content.innerHTML = "Zły numer";
     }
}
)();