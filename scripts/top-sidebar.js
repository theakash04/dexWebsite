/* function changeColor() {
  var w = window.outerWidth;
  if(w<=600)
  document.body.style */



//top bar functions for menu
let menubtn = document.querySelector(".menu");

let topbar = document.querySelector(".link-section");
let isMenu = true;

  menubtn.addEventListener("click", () =>{
    if(isMenu === true){
      topbar.setAttribute('style', 'display: flex');
      menubtn.innerHTML =  "<i class='bx bx-x'></i>" ;
      isMenu = false;
    }else{
      topbar.removeAttribute('style', 'display: none');
      menubtn.innerHTML =  "<i class='bx bx-menu'></i>" ;
      isMenu = true;
    }
  });





