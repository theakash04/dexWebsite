// use this for chaging the root color of css for theme theme to work.

//document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

let themebtn = document.querySelector(".themeChanger");

let isDark = true;



const darkTheme = () =>{
  themebtn.innerHTML = "<i class='bx bxs-moon'></i>";
  document.documentElement.style.setProperty('--background', '#131313')
  document.documentElement.style.setProperty('--mainBackground', '#1a1a1a')
  document.documentElement.style.setProperty('--selected-sidar-bg', '#353535')
  document.documentElement.style.setProperty('--button-bg', '#3a3a3a')
  document.documentElement.style.setProperty('--text1', '#ffffff')
  document.documentElement.style.setProperty('--text2', '#a3a3a3')
  document.documentElement.style.setProperty('--text3', '#7e7e7e')
  document.documentElement.style.setProperty('--btn-hover', '#58585863')
}

const lightTheme = () =>{
  themebtn.innerHTML = "<i class='bx bx-sun' ></i>";
  document.documentElement.style.setProperty('--background', '#f4f5f5')
  document.documentElement.style.setProperty('--mainBackground', '#fff')
  document.documentElement.style.setProperty('--selected-sidar-bg', '#353535')
  document.documentElement.style.setProperty('--button-bg', '#3a3a3a')
  document.documentElement.style.setProperty('--text1', '#000000')
  document.documentElement.style.setProperty('--text2', '#666666')
  document.documentElement.style.setProperty('--text3', '#999999')
  document.documentElement.style.setProperty('--btn-hover', '#d5d5d563');

}
const themeChange = () =>{
  if(isDark === true){
    lightTheme();
    isDark = false;  
  }else{
    darkTheme();
    isDark = true;
  }
}

themebtn.addEventListener("click", () =>{
  themeChange();
});
