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

aboutbtn.addEventListener("click", ()=>{
  window.open("../pages/About.html", "_self");
})




let projectContain = document.querySelector('.projects');

let i;

const projectfns = () =>{
  let project = document.createElement('div');
  let img = document.createElement('img');
  let textbox = document.createElement('div');
  let span = document.createElement('span');
  let p = document.createElement('p');
  let buttonContainer = document.createElement('div');
  let gitlink = document.createElement('a');
  let button1 = document.createElement('button');

  project.className = 'project'

  //inner project div
  img.src = `${projects[i].imgs}`
  textbox.className = 'textBox'
  buttonContainer.className = 'btns'

  //inner textbox div
  span.textContent = `${projects[i].title}`
  p.textContent = `${projects[i].description}`

  //inner buttonContainer div
  gitlink.href = projects[i].link;

  //inner gitlink
  button1.innerText = 'See Now!'


  //appending all now
  projectContain.appendChild(project);

  // appending inner project div
  project.appendChild(img);
  project.appendChild(textbox);
  project.appendChild(buttonContainer);

  //appending inner textbox div
  textbox.appendChild(span)
  textbox.appendChild(p)

  //apending inner buttoncontainer
  buttonContainer.appendChild(gitlink);

  //apending inner gitlink and liveprev
  gitlink.appendChild(button1)
}

for(i=0; i<4; i++){
  projectfns(); 
}
