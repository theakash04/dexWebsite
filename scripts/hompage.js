// copy function
let copy = document.querySelector(".copy");

const copied = () =>{
  setTimeout(()=>{
    copy.innerHTML = "<i class='bx bx-copy'></i> Copy email";
    copy.classList.remove("copied");
  }, "1500");
}
const copyfnc = () =>{
  navigator.clipboard.writeText("aakashkkr04@gmail.com");
  copy.classList.add("copied")
  copy.innerHTML = "<i class='bx bx-check' ></i> email copied"
  copied();
}

copy.addEventListener("click", () =>{
  copyfnc();
})


//About btn function
let aboutbtn = document.querySelector(".aboutbtn");
let homepage = document.querySelector(".homePage");
let aboutPage = document.querySelector(".aboutPage");
let home = document.querySelector("#homePage");
let about = document.querySelector("#about");
let isHomePage = true;
let isAbout = false;



about.addEventListener("click", () =>{
  if(isAbout === false){
    homepage.setAttribute('style', 'display: none');
    aboutPage.setAttribute('style', 'display: block');
    isAbout = true;
    isHomePage = false;
  }
})

aboutbtn.addEventListener("click", () =>{
  if(isHomePage === true){
    homepage.setAttribute('style', 'display: none');
    aboutPage.setAttribute('style', 'display: block');
   isHomePage = false;
   isAbout = true;
  }
})


home.addEventListener("click", () =>{
  if(isHomePage === false){
    homepage.setAttribute('style', 'display: block');
    aboutPage.setAttribute('style', 'display: none');
    isHomePage = true;
    isAbout = false;
  }
})