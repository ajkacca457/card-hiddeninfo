const cont=document.querySelector(".cont");
const popdiv=document.querySelectorAll(".popup");
const message=document.querySelector("h2");
const close=document.querySelector("#btn1")
popdiv.forEach((div) => {
div.addEventListener("click", function(){
  let outputmsg=this.getAttribute("data-message");
  message.innerText=outputmsg;
  cont.style.display="block";
})
});


btn1.addEventListener("click",function() {
  cont.style.display="none";
})


console.log(popdiv);
