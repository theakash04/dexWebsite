

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

//fix - click event not working on screen nor the touch event

